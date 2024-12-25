# Cómo Establecer la Posición del Cursor Usando la API de Lua de Neovim

Aprende a establecer programáticamente la posición del cursor en un buffer de Neovim utilizando su API de Lua. Esta guía proporciona instrucciones paso a paso con un ejemplo de código, haciéndolo fácil de integrar en tu configuración o plugin de Neovim.

## ¿Qué es `vim.api.nvim_win_set_cursor`?

La función `vim.api.nvim_win_set_cursor` en Neovim permite establecer la posición del cursor en una ventana específica.

#### Firma de la Función
- **`vim.api.nvim_win_set_cursor(win_id, { line, column }) -> nil`**

#### Parámetros:
- **`win_id`**: El ID de la ventana a manipular. Usa `0` para la ventana actual.
- **`{ line, column }`**
  - El **número de línea** (base 1).
  - El **número de columna** (base 0).

#### Retorna:
- **`nil`**

## Ejemplo

```lua
-- Ejemplo de uso: Saltar a la línea 10, columna 5
local function jump()
  vim.api.nvim_win_set_cursor(0, { 10, 5 }) -- 0 es el ID de la ventana actual
end

-- Asigna la función a una tecla
vim.keymap.set('n', ',,', jump, { desc = "Establecer posición del cursor" })

-- O ejecútala dentro de la función
vim.keymap.set('n', ',,', function()
    jump()
end, { desc = "Establecer posición del cursor" })
```