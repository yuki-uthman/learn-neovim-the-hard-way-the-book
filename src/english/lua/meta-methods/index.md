# How to Handle Missing Keys in Lua Tables Using `__index`

Learn how to define custom behavior for missing keys in Lua tables using the `__index` metamethod. This guide provides step-by-step instructions with a code example, making it easy to implement in your Lua scripts.

## What is the `__index` Metamethod?

The `__index` metamethod in Lua allows you to customize what happens when a missing key is accessed in a table. By setting it to a function, you can define dynamic or default behavior.

#### Function Signature
- **`function(tbl, key) -> value`**

#### Parameters:
- **`tbl`**: The table being accessed.
- **`key`**: The key that is missing in the table.

#### Returns:
- **`value`**
  - The result that Lua returns when the missing key is accessed.

## Example

```lua
-- Table representing a basic inventory
inventory = {
  apple = 5,
  banana = 10,
}

-- Define a metatable with an __index function
setmetatable(inventory, {
  -- when the key does not exist in inventory table, invoke this function
  -- tbl is the inventory table
  -- key is the missing key eg. mango or orange
  __index = function(tbl, key)
    print("Item '" .. key .. "' is not in the inventory.")
    -- return a default value
    return 0
  end
})

-- Example usage
print(inventory.apple)   -- Exists, prints 5
print(inventory.banana)  -- Exists, prints 10
print(inventory.mango)   -- Missing, calls __index
print(inventory.orange)  -- Missing, calls __index
```

## Using `__index` for Lazy Loading in Plenary

plenary.nvim, a popular lua library for neovim, uses the `__index` metamethod to implement lazy loading. lazy loading allows you to defer loading a module or resource until it is accessed, optimizing performance.

### Simplified Example: Lazy Loading with `__index`
For this example we create a dummy `plenary` plugin.
```lua
-- plenary/lua/plenary/init.lua
local M = {}

return M
```

It also has an empty submodule.

```lua
-- plenary/lua/plenary/a.lua
local M = {}

return M
```

This is init.lua calling the dummy plenary plugin.
```lua

local plenary = require("plenary") -- assuming plenary is an empty table

setmetatable(plenary, {
  __index = function(tbl, key)
    -- load the submodule
    local module = require("plenary." .. key)

    -- store the submodule in the plenary table
    rawset(tbl, key, value)
    return value
  end
})

-- plenary table starts with just a metatable
vim.print(plenary)
-- {
--   <metatable> = {
--     __index = <function>,
--   }
-- }

-- Triggers __index, require "plenary.a" and insert it into plenary table
vim.print(plenary.a) -- {}

-- now plenary table has "a" with the loaded submodule
vim.print(plenary)
-- {
--   <metatable> = {
--     __index = <function>,
--   }
--   a = <submodule returned by require "plenary.a">
-- }

-- From the second time onwards, it does not trigger __index
-- because the submodule is already in the table
vim.print(plenary.a) -- {}
```
