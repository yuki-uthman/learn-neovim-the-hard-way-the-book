# How to Use `__call` Metamethod in Lua

Learn how to define custom behavior for tables so they can be called like functions using the `__call` metamethod. This guide provides step-by-step instructions with a code example, making it easy to implement in your Lua scripts.

## What is the `__call` Metamethod?

The `__call` metamethod in Lua allows you to customize what happens when a table is used as a function. By setting it in a table's metatable, you can define dynamic behavior when the table is invoked as a callable object.

#### Function Signature
- **`function(tbl, ...) -> value`**

#### Parameters:
- **`tbl`**: The table being accessed.
- **`...`**: Any arguments passed to the function.

#### Returns:
- **`value`**
  - The result that Lua returns when the table is invoked as a function.

## Example

```lua
-- Define a table with a metatable implementing __call
local CallableTable = {}

-- Set the metatable
setmetatable(CallableTable, {
  __call = function(self, ...)
    return "Called with " .. table.concat({...}, ", ")
  end
})

-- Use the table as a function
print(CallableTable("Lua", "arg1", "arg2"))  -- Output: Called with Lua, arg1, arg2
```
