# How to Move the Cursor Up or Down Using Neovim's Lua API

Learn how to programmatically move the cursor up or down by a specified number of lines using Neovim's Lua API. This guide includes a code example to make it easy to integrate into your Neovim configuration or plugin.

## APIs Required:
To move the cursor, you'll need to combine the `vim.api.nvim_win_get_cursor` function (to get the current cursor position) with the `vim.api.nvim_win_set_cursor` function (to set the new cursor position).

### 1. `vim.api.nvim_win_get_cursor`
Retrieves the current cursor position in a specified window.

- **Signature**: `vim.api.nvim_win_get_cursor(win_id) -> { line, column }`
- **Parameters**: 
  - `win_id`: Use `0` for the current window.
- **Returns**:
  - `{ line, column }`: the position of the cursor as a table with the line number (1-based) and column number (0-based).

### 2. `vim.api.nvim_win_set_cursor`
Sets the cursor position in a specified window.

- **Signature**: `vim.api.nvim_win_set_cursor(win_id, { line, column }) -> nil`
- **Parameters**:
  - `win_id`: Use `0` for the current window.
  - `{ line, column }`: the new position of the cursor as a table with the line number (1-based) and column number (0-based).

## Example: Move the Cursor Up or Down
```lua
-- Function to move the cursor by a specified number of lines
local function move_cursor(offset)

  -- Get the current cursor position
  local cursor_pos = vim.api.nvim_win_get_cursor(0)
  local current_line = cursor_pos[1] -- 1-based line number
  local current_col = cursor_pos[2] -- 0-based column number

  -- Calculate the new line position
  local new_line = current_line + offset

  -- Update the cursor position
  vim.api.nvim_win_set_cursor(0, { new_line, current_col })
end

-- Example: Move the cursor 5 lines down
vim.keymap.set('n', '<leader>j', function() 
  move_cursor(5)
end, { desc = "Move cursor down by 5 lines" })

-- Example: Move the cursor 5 lines up
vim.keymap.set('n', '<leader>k', function()
  move_cursor(-5)
end, { desc = "Move cursor up by 5 lines" })

