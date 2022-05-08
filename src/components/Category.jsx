import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
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
    <ul style={{borderColor: "red", border: "solid"}} >
      <li>
        <h3 style={{fontFamily: 'Helvetica', fontSize: 25}}>{category.categoryName}</h3>
        <FontAwesomeIcon style={{backgroundColor: "powderblue"}} fixedWidth border icon={faTrash} onClick={() => deleteSingleCategory(category)}>Delete</FontAwesomeIcon>
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
