const baseUrl = 'http://localhost:8080/todos'

export const loadTodos = () => {
  return fetch(baseUrl)
    .then(res => res.json())
}

export const createTodo = (todo) => {
  return fetch(baseUrl, {
    method: 'POST',
    body: JSON.stringify(todo),
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
  }).then(res => res.json())
}


export const saveTodo = (todo) => {
  return fetch(`${baseUrl}/${todo.id}`, {
    method: 'PUT',
    body: JSON.stringify(todo),
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
  }).then(res => res.json())
}

export const destroyTodo = (id) => {
  return fetch(`${baseUrl}/${id}`, {
    method: 'DELETE',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
  })
}
