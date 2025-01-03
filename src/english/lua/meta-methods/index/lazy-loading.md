# Lazy Loading in Lua with Plenary.nvim

Plenary.nvim, a popular Lua library for Neovim, uses the `__index` metamethod to implement lazy loading. Lazy loading allows you to defer loading a module or resource until it is accessed, optimizing performance and reducing initial load times.

## How Does Plenary Use `__index` for Lazy Loading?

Plenary utilizes the `__index` metamethod to dynamically load modules when they are accessed for the first time. The loaded modules are cached to avoid repeated lookups.

#### Function Signature for `__index`
- **`function(tbl, key) -> value`**

#### Parameters:
- **`tbl`**: The table being accessed.
- **`key`**: The key that is missing in the table.

#### Returns:
- **`value`**
  - The dynamically loaded module or resource.

### Simplified Example: Lazy Loading with `__index`

For this example, we create a dummy `plenary` plugin.

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

This is `init.lua` calling the dummy plenary plugin.

```lua
local plenary = require("plenary") -- assuming plenary is an empty table

setmetatable(plenary, {
  __index = function(tbl, key)
    -- load the submodule
    local module = require("plenary." .. key)

    -- store the submodule in the plenary table
    rawset(tbl, key, module)
    return module
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
