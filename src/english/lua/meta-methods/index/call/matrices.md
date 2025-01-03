# Using `__call` for Matrix Operations in Lua

Let's see how we can use __call to make retrieving the elements of a matrix look more intuitive.

### Implementation Without `__call`:
Normally it would look something like this:
```lua
-- Define a Matrix table
local M = {}

-- Initialize the matrix
M.data = {
  {1, 2, 3},
  {4, 5, 6},
  {7, 8, 9}
}

-- Function to access matrix elements
function M.get(row, col)
  return M.data[row][col]
end

-- We have to call get function
print(M.get(0, 1))  -- Output: 2
print(M.get(1, 2))  -- Output: 6
```

However scientists would probably expect something like this:
```lua
print(M(0, 1))  -- Output: 2
print(M(1, 2))  -- Output: 6
```

### Implementation With `__call`:
```lua
-- Matrix metatable implementing __call
setmetatable(Matrix, {
  __call = function(self, row, col)
    return self.data[row][col]
  end
})

-- Access matrix elements using __call
print(M(0, 1))  -- Output: 2
print(M(1, 2))  -- Output: 6
```
