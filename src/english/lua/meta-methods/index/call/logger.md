# Eliminates Explicit Function Calls with `__call`

When using `__call`, you no longer need to explicitly reference a method or function name. This reduces verbosity and results in a cleaner syntax, particularly in scenarios where repeated calls are necessary.

#### Function Signature
- **`function(tbl, ...) -> value`**

#### Parameters:
- **`tbl`**: The table being accessed.
- **`...`**: Any arguments passed to the function.

#### Returns:
- **`value`**
  - The result that Lua returns when the table is invoked as a function.

### Example Without Using `__call`:
```lua
local Logger = {}

function Logger.log(message, level)
  level = level or "INFO"
  print("[" .. level .. "]: " .. message)
end

-- Use the Logger via a method call
Logger.log("System initialized.")         -- Output: [INFO]: System initialized.
Logger.log("Disk space low.", "WARNING")  -- Output: [WARNING]: Disk space low.
```

### Example Using `__call`:
```lua
local Logger = {}

setmetatable(Logger, {
  __call = function(self, message, level)
    level = level or "INFO"
    print("[" .. level .. "]: " .. message)
  end
})

-- Use the Logger directly
Logger("System initialized.")         -- Output: [INFO]: System initialized.
Logger("Disk space low.", "WARNING")  -- Output: [WARNING]: Disk space low.

