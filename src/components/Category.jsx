import { useContext } from 'react'
import { Store } from '../state/StoreProvider'
import Todo from './Todo'
import TodoForm from './TodoForm'

const Category = ({ category }) => {
  const { dispatch } = useContext(Store)
  const deleteCategory = (category) => {
    dispatch({ type: 'remove-category', payload: category })
  }
  return (
    <ul>
      <li>
        <h4>{category.categoryName}</h4>
        <button onClick={() => deleteCategory(category)}>Delete</button>
        <TodoForm categoryParent={category} />
        {category.listOfToDos.map((todo) => (
          <Todo key={todo.id} todo={todo} />
        ))}
      </li>
    </ul>
  )
}

export default Category
