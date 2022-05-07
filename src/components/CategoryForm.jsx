import { useContext } from 'react'
import { Store } from '../state/StoreProvider'

const CategoryForm = () => {
  const { dispatch } = useContext(Store)
  const onSubmit = (event) => {
    event.preventDefault()
  }
  return (
    <form onSubmit={(event) => onSubmit(event)}>
      <label>
        <input placeholder='Add new category' />
      </label>
    </form>
  )
}

export default CategoryForm
