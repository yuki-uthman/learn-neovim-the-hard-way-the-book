# How to Get the Current Line Content using Neovim's Lua API

Learn how to retrieve the content of the current line in a Neovim buffer using its Lua API. This guide provides a simple code example for seamless integration into your Neovim configurations or plugins.

## What is `vim.api.nvim_get_current_line`?

The `vim.api.nvim_get_current_line` function retrieves the content of the current line where the cursor is positioned.

#### Function Signature
- **`vim.api.nvim_get_current_line() -> string`**

#### Returns:
- **`string`**
  - The content of the current line as a string.

## Example
```lua
-- Function to retrieve and display the current line content
local function print_current_line_content()

  -- Get the content of the current line
  local line_content = vim.api.nvim_get_current_line()

  -- Display the current line content in the command line
  print("Current Line Content: " .. line_content)
end

-- Map the function to a key
vim.keymap.set('n', ',,', print_current_line_content, { desc = "Print current line content" })

-- Or execute it inside the function
vim.keymap.set('n', ',,', function()
    print_current_line_content()
end, { desc = "Print current line content" })

