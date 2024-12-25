# How to Move the Cursor to a Specific Line using Neovim's Lua API

Learn how to programmatically move the cursor to a specific line in a file using Neovim API. This guide provides detailed instructions with a code example to help you integrate it into your Neovim configuration or plugin.

## What is `vim.api.nvim_win_set_cursor`?

The `vim.api.nvim_win_set_cursor` function allows you to set the cursor's position in a specified window programmatically.

#### Function Signature
- **`vim.api.nvim_win_set_cursor(win_id, { line, column }) -> nil`**

#### Parameters:
- **`win_id`**: The ID of the window where the cursor will be moved. Use `0` for the current window.
- **`{ line, column }`**: A table containing:
  - **line** (1-based): The target line number.
  - **column** (0-based): The target column number.

#### Returns:
- **`nil`**

## Example
```lua
-- Function to move the cursor to Line 10
local function move_to_line_10()
  vim.api.nvim_win_set_cursor(0, { 10, 0 }) -- 0 is the ID of the current window
end

-- Map the function to a keybinding for quick testing
vim.keymap.set('n', ',,', move_to_line_10, { desc = "Move cursor to line 10" })

