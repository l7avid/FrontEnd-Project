const ENDPOINT = 'http://localhost:8081/api/category'


const HEADERS = {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  }

export const getCategory = async () => {
  const response = await fetch(ENDPOINT)
  const data = await response.json()
  return data
}

export const saveCategory = async (category) => {
    const response = await fetch(ENDPOINT, {method: "POST", body: JSON.stringify(category), headers: HEADERS})
    const data = await response.json()
    return data
  }

  export const deleteCategory = async (category) => {
    const response = await fetch(`${ENDPOINT}/${category.categoryId}`, {method: "DELETE", headers: HEADERS})
    return response
  }