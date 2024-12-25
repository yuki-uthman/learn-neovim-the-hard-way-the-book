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
-- Ejemplo: Mover el cursor a la línea 15 y la columna 3
local function mover_a_linea()
  vim.api.nvim_win_set_cursor(0, { 15, 3 }) -- 0 es el ID de la ventana actual
end

-- Asigna la función a un atajo para probar fácilmente
vim.keymap.set('n', ',m', mover_a_linea, { desc = "Mover el cursor a una línea específica" })
