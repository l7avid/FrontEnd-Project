const ENDPOINT = 'http://localhost:8080/api/category'

export const getCategory = async () => {
  const response = await fetch(ENDPOINT)
  const data = await response.json()
  return data
}