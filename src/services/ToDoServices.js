const ENDPOINT = 'http://localhost:8081/api/todo'

const HEADERS = {
  Accept: 'application/json',
  'Content-Type': 'application/json',
}

export const saveToDo = async (todo) => {
  const response = await fetch(ENDPOINT, { method: 'POST', body: JSON.stringify(todo), headers: HEADERS})
  const data = await response.json()
  return data
}

export const updateToDo = async (todo) => {
  const response = await fetch(ENDPOINT, { method: 'PUT', body: JSON.stringify(todo), headers: HEADERS })
  const data = await response.json()
  return data
}

export const deleteToDo = async (todo) => {
  const response = await fetch(`${ENDPOINT}/${todo.id}`, { method: 'DELETE', body: JSON.stringify(todo), headers: HEADERS })
  return response
}