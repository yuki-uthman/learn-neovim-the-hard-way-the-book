# How to Map a Key to a Lua Function in Neovim

Learn how to set a keymap to invoke a Lua function in Neovim. This guide provides step-by-step instructions with a code example, making it easy to integrate Lua functions into your Neovim Plugin.

## What is `vim.keymap.set`?

The `vim.keymap.set` function in Neovim is a modern and flexible way to create key mappings. It allows you to map a key directly to a Lua function, providing seamless integration with Lua scripting.

#### Function Signature
- **`vim.keymap.set(mode, lhs, rhs, opts) -> nil`**

#### Parameters:
- **`mode`**: The mode(s) in which the key mapping applies (e.g., `'n'` for normal mode, `'i'` for insert mode).
- **`lhs`**: The key sequence to trigger the mapping (left-hand side).
- **`rhs`**: The Lua function to execute or a string representing a command (right-hand side).
- **`opts`** *(optional)*: A table of options to customize the mapping.

#### Common Options
- **`desc`**: A description of the mapping (useful for documentation in `:map` output).
- **`silent`**: Suppress command echo (default `false`).
- **`noremap`**: Prevent remapping (default `true`).

## Example
```lua
-- Define a Lua function
local function greet_user()
  print("Hello, welcome to Neovim!")
end

-- Map the function to the key
vim.keymap.set('n', ',,', greet_user, { desc = "Greet the user" })

-- Or execute it inside the function
vim.keymap.set('n', ',,', function()
  greet_user()
end, { desc = "Greet the user" })

