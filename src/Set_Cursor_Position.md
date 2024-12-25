# How to Set the Cursor Position Using Neovim's Lua API

Learn how to programmatically set the cursor position in a Neovim buffer using its Lua API. This guide provides step-by-step instructions with a code example, making it easy to integrate into your Neovim configuration or plugin.

## What is `vim.api.nvim_win_set_cursor`?

The `vim.api.nvim_win_set_cursor` function in Neovim allows you to set the cursor position in a specified window.

#### Function Signature
- **`vim.api.nvim_win_set_cursor(win_id, { line, column }) -> nil`**

#### Parameters:
- **`win_id`**: The ID of the window to manipulate. Use `0` for the current window.
- **`{ line, column }`**
  - The **line number** (1-based).
  - The **column number** (0-based).

#### Returns:
- **`nil`**

## Example

```lua
-- Example usage: Jump to line 10, column 5
local function jump()
  vim.api.nvim_win_set_cursor(0, { 10, 5 }) -- 0 is the ID of the current window
end

-- Map the function to a keybinding for quick testing
vim.keymap.set('n', ',,', jump, { desc = "Set cursor position" })
```
