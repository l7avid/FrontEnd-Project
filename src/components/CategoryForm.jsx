import { useContext, useState } from 'react'
import { saveCategory } from '../services/CategoryServices'
import { Store } from '../state/StoreProvider'

const CategoryForm = () => {
  const { dispatch } = useContext(Store)
  const [title, setTitle] = useState("")
  const onSubmit = async (event) => {
    event.preventDefault()
    if(title){
      const newCategory = {categoryName: title}
      const response = await saveCategory(newCategory)
      dispatch({type: "add-category", payload: response})
      setTitle("")
    }
  }

  return (
    <form onSubmit={(event) => onSubmit(event)}>
      <label>
        <input value={title} onChange={(event) => setTitle(event.target.value)} placeholder='Add new category' />
      </label>
    </form>
  )
}

export default CategoryForm
