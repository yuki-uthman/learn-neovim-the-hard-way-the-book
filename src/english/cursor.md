# Cursor

## General
- [How do I get the current cursor position using Neovim API?](cursor/get-position.md)
- [How do I set the cursor position using Neovim API?](cursor/set-position.md)
- [How do I move the cursor to a specific line using Neovim API?](cursor/move-to-line.md)
- What is the difference between row and column indexing in `vim.api.nvim_win_get_cursor` and `vim.api.nvim_win_set_cursor`?
- [How do I move the cursor up or down?](cursor/move-up-or-down-1.md)
- [How do I move the cursor up or down using feedkeys?](cursor/move-up-or-down-2.md)
- How do I move the cursor to the start or end of the line using the API?
- How do I ensure the cursor stays within the visible window?
- How do I move the cursor to a specific word or character in the current buffer?
- How do I jump the cursor to a specific line in the file?
- How do I implement custom cursor motions using the Neovim API?
- How do I move the cursor to the beginning or end of the file?

## Cursor Highlighting and Behavior
- How do I highlight the cursor line in Neovim using the API?
- How do I customize the cursor shape (e.g., block, underline, beam) in Neovim?
- How do I ensure the cursor position is visible in the current viewport?
- How can I highlight or visually mark the current cursor position?
- How do I prevent the cursor from moving to the wrong position when switching modes?

## Visual Mode and Text Objects
- How do I get the current cursor range in visual mode using the API?
- How do I determine the text object under the cursor?
- How can I programmatically adjust the visual selection based on the cursor position?
- How do I programmatically extend a visual selection using the cursor?

## Multicursor
- Does Neovim support multiple cursors natively through the API?
- How can I simulate multiple cursors programmatically in Neovim?
- How do plugins like `vim-visual-multi` implement multiple cursors?

## Cursor and Windows
- How do I move the cursor between windows programmatically?
- How do I ensure the cursor position is maintained when switching between splits?
- How can I scroll a window to center the cursor programmatically?
- How do I move the cursor in a floating window using the Neovim API?

## Cursor and Buffers
- How do I get the cursor position in a specific buffer?
- How do I set the cursor position in a different buffer?
- How can I programmatically restore the cursor position in a buffer after reopening it?

## Cursor Events
- How do I detect when the cursor moves using autocommands or the API?
- How can I execute a function every time the cursor moves?
- How do I handle `CursorHold` and `CursorMoved` events programmatically?
- How do I trigger custom actions based on the cursor's position?

## Cursor Styling
- How do I customize the cursor style in Neovim?
- How can I make the cursor blink programmatically?
- How do I change the cursor style for different modes (e.g., insert, normal, visual)?
- How do I create a cursor trail or animation using the API?

## Cursor and Searching
- How do I move the cursor to the next search match programmatically?
- How can I highlight all occurrences of a word under the cursor?
- How do I programmatically search for a word and place the cursor at the first match?
- How do I move the cursor to the previous search result?

## Troubleshooting
- Why does the cursor position change unexpectedly in some cases?
- How do I handle cursor jumps caused by plugins or custom configurations?
- Why does the cursor move out of the visible viewport during execution?
- How do I reset the cursor to its previous position after executing a function?
- How can I fix issues where the cursor position is incorrect after resizing the window?

## Miscellaneous
- How do I center the cursor in the viewport programmatically?
- How do I detect if the cursor is at the end of the file?
- How do I retrieve the character under the cursor using the Neovim API?
- How do I prevent the cursor from moving during a specific operation?
- How do I move the cursor relative to a specific mark or location in the buffer?
