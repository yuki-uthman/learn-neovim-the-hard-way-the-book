# Cómo Mover el Cursor Hacia Arriba o Abajo Usando la API de Lua de Neovim

Aprende cómo mover programáticamente el cursor hacia arriba o abajo un número especificado de líneas usando la API de Lua de Neovim. Esta guía incluye un ejemplo de código para facilitar su integración en tu configuración de Neovim o en un plugin.

## APIs Necesarias:
Para mover el cursor, necesitas combinar la función `vim.api.nvim_win_get_cursor` (para obtener la posición actual del cursor) con la función `vim.api.nvim_win_set_cursor` (para establecer la nueva posición del cursor).

### 1. `vim.api.nvim_win_get_cursor`
Obtiene la posición actual del cursor en una ventana especificada.

- **Firma**: `vim.api.nvim_win_get_cursor(win_id) -> { line, column }`
- **Parámetros**: 
  - `win_id`: Usa `0` para la ventana actual.
- **Devuelve**:
  - `{ line, column }`: la posición del cursor como una tabla con el número de línea (basado en 1) y el número de columna (basado en 0).

### 2. `vim.api.nvim_win_set_cursor`
Establece la posición del cursor en una ventana especificada.

- **Firma**: `vim.api.nvim_win_set_cursor(win_id, { line, column }) -> nil`
- **Parámetros**:
  - `win_id`: Usa `0` para la ventana actual.
  - `{ line, column }`: la nueva posición del cursor como una tabla con el número de línea (basado en 1) y el número de columna (basado en 0).

## Ejemplo: Mover el Cursor Hacia Arriba o Abajo
```lua
-- Función para mover el cursor un número especificado de líneas
local function move_cursor(offset)

  -- Obtiene la posición actual del cursor
  local cursor_pos = vim.api.nvim_win_get_cursor(0)
  local current_line = cursor_pos[1] -- Número de línea basado en 1
  local current_col = cursor_pos[2] -- Número de columna basado en 0

  -- Calcula la nueva posición de línea
  local new_line = current_line + offset

  -- Actualiza la posición del cursor
  vim.api.nvim_win_set_cursor(0, { new_line, current_col })
end

-- Ejemplo: Mover el cursor 5 líneas hacia abajo
vim.keymap.set('n', '<leader>j', function() 
  move_cursor(5)
end, { desc = "Mover el cursor hacia abajo 5 líneas" })

-- Ejemplo: Mover el cursor 5 líneas hacia arriba
vim.keymap.set('n', '<leader>k', function()
  move_cursor(-5)
end, { desc = "Mover el cursor hacia arriba 5 líneas" })

