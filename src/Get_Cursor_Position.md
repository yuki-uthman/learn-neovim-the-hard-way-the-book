# How to Get the Current Cursor Position in Neovim Using Lua

Learn how to retrieve and display the current cursor position using Neovim Api. This guide provides step-by-step instructions with a code example, making it easy to use this code in your Neovim Plugin.

## What is `vim.api.nvim_win_get_cursor`?

The `vim.api.nvim_win_get_cursor` function in Neovim retrieves the current cursor position in a specified window.

### Parameters:
- **`win_id`**: The ID of the window to query. Use `0` for the current window.

### Returns:
- A tuple containing:
  - The **line number** (1-based).
  - The **column number** (0-based).

## Code Example to Get the Cursor Position

Here is a complete code to fetch and print the current cursor position in Neovim:

```lua
-- Function to retrieve and display the current cursor position
local function get_cursor_position()
  -- Get the current cursor position in the current window
  local cursor_pos = vim.api.nvim_win_get_cursor(0)
  local line = cursor_pos[1] -- 1-based line number
  local col = cursor_pos[2] -- 0-based column number

  -- Display the cursor position in the command line
  print("Cursor Position: Line " .. line .. ", Column " .. col)
end

-- Map the function to a keybinding for quick access
vim.keymap.set('n', ',,', get_cursor_position, { desc = "Show cursor position" })
```
