const ENDPOINT = 'http://localhost:8080/api/todo'

export const createTodo = async (todo) => {
  const response = await fetch(ENDPOINT, { method: 'POST', body: JSON.stringify(todo) })
  const data = await response.json()
  return data
}