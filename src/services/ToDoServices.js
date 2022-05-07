const ENDPOINT = 'http://localhost:8081/api/todo'

export const createTodo = async (todo) => {
  const response = await fetch(ENDPOINT, { method: 'POST', body: JSON.stringify(todo) })
  const data = await response.json()
  return data
}