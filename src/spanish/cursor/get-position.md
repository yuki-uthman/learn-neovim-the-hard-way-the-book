# Cómo Obtener la Posición Actual del Cursor Usando la API de Lua de Neovim

Aprende a recuperar y mostrar la posición actual del cursor usando la API de Neovim. Esta guía proporciona instrucciones paso a paso con un ejemplo de código, facilitando el uso de este código en tu plugin de Neovim.

## ¿Qué es `vim.api.nvim_win_get_cursor`?

La función `vim.api.nvim_win_get_cursor` en Neovim recupera la posición actual del cursor en una ventana especificada.

#### Firma de la Función
- **`vim.api.nvim_win_get_cursor(win_id) -> { línea, columna }`**

#### Parámetros:
- **`win_id`**: El ID de la ventana a consultar. Usa `0` para la ventana actual.

#### Retorno:
- **`{ línea, columna }`**
  - El **número de línea** (comienza en 1).
  - El **número de columna** (comienza en 0).

## Ejemplo
```lua
-- Función para obtener y mostrar la posición actual del cursor
local function print_cursor_position()

  -- Obtiene la posición actual del cursor en la ventana actual
  local cursor_pos = vim.api.nvim_win_get_cursor(0)
  local line = cursor_pos[1] -- Número de línea basado en 1
  local col = cursor_pos[2] -- Número de columna basado en 0

  -- Muestra la posición del cursor en la línea de comandos
  print("Posición del cursor: Línea " .. line .. ", Columna " .. col)
end

-- Asigna la función a una tecla
vim.keymap.set('n', ',,', print_cursor_position, { desc = "Imprimir posición del cursor" })

-- O ejecútala dentro de la función
vim.keymap.set('n', ',,', function()
    print_cursor_position()
end, { desc = "Imprimir posición del cursor" })
```
