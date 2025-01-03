# Providing Default User Config with `__index`

Using Lua's `__index` metamethod, you can provide default values for user configurations in your Neovim plugins or scripts. This pattern is particularly useful for maintaining flexibility while ensuring that critical configurations are always available.

## Why Use `__index` for Default Configs?

When creating a plugin or script, you often need to handle user-defined configurations. However, not every user will define all the options you expect. With `__index`, you can set default values for missing configurations while allowing users to override them.

#### Function Signature for `__index`
- **`function(tbl, key) -> value`**

#### Parameters:
- **`tbl`**: The table being accessed.
- **`key`**: The key that is missing in the table.

#### Returns:
- **`value`**
  - The default value for the missing key.

## Example: Providing Default Configurations

Here’s an example of using `__index` to provide default values for user configurations:

```lua
-- Default configuration table
local defaults = {
  theme = "dark",
  auto_save = false,
  max_tabs = 10,
}

-- User configuration table (can be partially filled)
local user_config = {
  auto_save = true, -- User overrides this setting
}

-- Set up a metatable to use defaults for missing keys
setmetatable(user_config, {
  __index = function(tbl, key)
    -- lookup the missing key from the defaults table
    return defaults[key]
  end
})

-- Example usage
print(user_config.theme)     -- theme is missing, use the default -> "dark"
print(user_config.max_tabs)  -- max_tabs is missing, use the default -> 10

print(user_config.auto_save) -- auto_save is in the user config -> true
```
