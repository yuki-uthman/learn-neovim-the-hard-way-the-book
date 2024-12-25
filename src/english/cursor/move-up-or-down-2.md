# How to Move the Cursor Up or Down Using `feedkeys` in Neovim's Lua API

Learn how to programmatically move the cursor up and down using Neovim's `feedkeys` function. This guide provides an example for invoking normal mode commands through Lua, enabling you to manipulate the cursor efficiently.

## What is `vim.api.nvim_feedkeys`?

The `vim.api.nvim_feedkeys` function allows you to simulate key presses in Neovim, making it a versatile tool for programmatically invoking commands.

#### Function Signature
- **`vim.api.nvim_feedkeys(keys, mode, escape_ks)`**

#### Parameters:
- **`keys`**: A string representing the key sequence to simulate.
- **`mode`**: A string indicating the mode to execute the keys (e.g., "n" for normal mode).
- **`escape_ks`**: A boolean or string determining whether the `key` sequences should escape special characters.

## Example: Moving the Cursor Up or Down

```lua
-- Function to move the cursor up by a specified number of lines
local function move_cursor_up(lines)
  vim.api.nvim_feedkeys(tostring(lines) .. "k", "n", false)
end

-- Function to move the cursor down by a specified number of lines
local function move_cursor_down(lines)
  vim.api.nvim_feedkeys(tostring(lines) .. "j", "n", false)
end

-- Example usage: Move the cursor up by 5 lines
vim.keymap.set('n', '<leader>k', function()
  move_cursor_up(5)
end, { desc = "Move cursor up by 5 lines" })

-- Example usage: Move the cursor down by 5 lines
vim.keymap.set('n', '<leader>j', function()
  move_cursor_down(5)
end, { desc = "Move cursor down by 5 lines" })
