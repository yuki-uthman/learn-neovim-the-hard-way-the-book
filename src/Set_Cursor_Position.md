# How to set the Cursor Position in Neovim Using Lua

In this blog post, we’ll explore how to set the cursor position in using Neovim API. This can be particularly useful when you need to programmatically jump to specific lines or columns in a file.

## What is `vim.api.nvim_win_set_cursor`?

The `vim.api.nvim_win_set_cursor` function allows you to programmatically set the cursor position in a specified window.

### Parameters:
- **`win_id`**: The ID of the window to manipulate. Use `0` for the current window.
- **`pos`**: A table containing:
  - The **line number** (1-based).
  - The **column number** (0-based).

### Example Usage:
Here is how you can set the cursor position:

```lua
-- Example usage: Jump to line 10, column 5
local function jump()
  vim.api.nvim_win_set_cursor(0, {10, 5}) -- 0 is the ID of the current window
end

-- Map the function to a keybinding for quick testing
vim.keymap.set('n', ',,', jump, { desc = "Set cursor position" })
```
