import { useContext, useState } from 'react'
import { deleteCategory } from '../services/CategoryServices'
import { Store } from '../state/StoreProvider'
import AuxForm from './AuxForm'
import Todo from './Todo'
import TodoForm from './TodoForm'

const Category = ({ category }) => {
  const [temporalAuxState, setTemporalAuxState] = useState({})
  const { dispatch } = useContext(Store)
  const deleteSingleCategory = async (category) => {
    const response = await deleteCategory(category)
    if(response.status == 200){
      dispatch({ type: 'remove-category', payload: category })
    }
  }
  return (
    <ul>
      <li>
        <h4>{category.categoryName}</h4>
        <button onClick={() => deleteSingleCategory(category)}>Delete</button>
        {
          temporalAuxState.title ? <AuxForm setTemporalAuxState={setTemporalAuxState} temporalAuxState={temporalAuxState}/> : <TodoForm categoryParent={category} />

        }
        {category.toDos.map((todo) => (
          <Todo key={todo.id} todo={todo} setTemporalAuxState={setTemporalAuxState}/>
        ))}
      </li>
    </ul>
  )
}

export default Category
