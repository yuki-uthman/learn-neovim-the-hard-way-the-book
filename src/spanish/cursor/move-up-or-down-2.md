# Cómo Mover el Cursor Arriba y Abajo Usando `feedkeys` en la API de Lua de Neovim

Aprende cómo mover el cursor programáticamente hacia arriba y abajo utilizando la función `feedkeys` de Neovim. Esta guía proporciona un ejemplo de cómo invocar comandos en modo normal a través de Lua, permitiéndote manipular el cursor de manera eficiente.

## ¿Qué es `vim.api.nvim_feedkeys`?

La función `vim.api.nvim_feedkeys` te permite simular pulsaciones de teclas en Neovim, convirtiéndola en una herramienta versátil para invocar comandos de forma programada.

#### Firma de la función
- **`vim.api.nvim_feedkeys(keys, mode, escape_ks)`**

#### Parámetros:
- **`keys`**: Una cadena que representa la secuencia de teclas a simular.
- **`mode`**: Una cadena que indica el modo en el que se ejecutarán las teclas (por ejemplo, "n" para modo normal).
- **`escape_ks`**: Un booleano o cadena que determina si las secuencias de teclas deben escapar caracteres especiales.

## Ejemplo: Mover el Cursor Arriba y Abajo

```lua
-- Función para mover el cursor hacia arriba un número específico de líneas
local function move_cursor_up(lines)
  vim.api.nvim_feedkeys(tostring(lines) .. "k", "n", false)
end

-- Función para mover el cursor hacia abajo un número específico de líneas
local function move_cursor_down(lines)
  vim.api.nvim_feedkeys(tostring(lines) .. "j", "n", false)
end

-- Ejemplo de uso: Mover el cursor hacia arriba 5 líneas
vim.keymap.set('n', '<leader>k', function()
  move_cursor_up(5)
end, { desc = "Mover cursor hacia arriba 5 líneas" })

-- Ejemplo de uso: Mover el cursor hacia abajo 5 líneas
vim.keymap.set('n', '<leader>j', function()
  move_cursor_down(5)
end, { desc = "Mover cursor hacia abajo 5 líneas" })

