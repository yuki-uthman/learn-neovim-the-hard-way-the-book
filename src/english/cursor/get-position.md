# How to Get the Current Cursor Position using Neovim's Lua API

Learn how to retrieve and display the current cursor position using Neovim Api. This guide provides step-by-step instructions with a code example, making it easy to use this code in your Neovim Plugin.

## What is `vim.api.nvim_win_get_cursor`?

The `vim.api.nvim_win_get_cursor` function in Neovim retrieves the current cursor position in a specified window.

#### Function Signature
- **`vim.api.nvim_win_get_cursor(win_id) -> { line, column }`**

#### Parameters:
- **`win_id`**: The ID of the window to query. Use `0` for the current window.

#### Returns:
- **`{ line, column }`**
  - The **line number** (1-based).
  - The **column number** (0-based).

## Example
```lua
-- Function to retrieve and display the current cursor position
local function print_cursor_position()

  -- Get the current cursor position in the current window
  local cursor_pos = vim.api.nvim_win_get_cursor(0)
  local line = cursor_pos[1] -- 1-based line number
  local col = cursor_pos[2] -- 0-based column number

  -- Display the cursor position in the command line
  print("Cursor Position: Line " .. line .. ", Column " .. col)
end

-- Map the function to a key
vim.keymap.set('n', ',,', print_cursor_position, { desc = "Print cursor position" })

-- Or execute it inside the function
vim.keymap.set('n', ',,', function()
    print_cursor_position()
end, { desc = "Print cursor position" })
```
