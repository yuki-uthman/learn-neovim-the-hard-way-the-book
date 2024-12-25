# Cómo Mover el Cursor a una Línea Específica Usando el API de Lua de Neovim

Aprende cómo mover el cursor a una línea específica en un buffer de Neovim usando su API de Lua. Este tutorial te guía paso a paso con un ejemplo de código, lo que facilita integrar este código en tu configuración o plugin de Neovim.

## ¿Qué es `vim.api.nvim_win_set_cursor`?

La función `vim.api.nvim_win_set_cursor` en Neovim permite establecer la posición del cursor en una ventana específica.

#### Firma de la Función
- **`vim.api.nvim_win_set_cursor(win_id, { line, column }) -> nil`**

#### Parámetros:
- **`win_id`**: El ID de la ventana que deseas manipular. Usa `0` para la ventana actual.
- **`{ line, column }`**
  - El **número de línea** (base 1).
  - El **número de columna** (base 0).

#### Devuelve:
- **`nil`**

## Ejemplo
```lua
-- Función para mover el cursor a la línea 10
local function move_to_line_10()
  vim.api.nvim_win_set_cursor(0, { 10, 0 }) -- 0 es el ID de la ventana actual
end

-- Asigna la función a una tecla
vim.keymap.set('n', ',,', move_to_line_10, { desc = "Mover el cursor a la línea 10" })

-- O ejecútala dentro de la función
vim.keymap.set('n', ',,', function()
    move_to_line_10()
end, { desc = "Mover el cursor a la línea 10" })
```
