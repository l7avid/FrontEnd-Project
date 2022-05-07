import { useContext } from 'react'
import { deleteToDo, updateToDo } from '../services/ToDoServices'
import { Store } from '../state/StoreProvider'
import { faTrash, faPenToSquare } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const Todo = ({ todo, setTemporalAuxState }) => {
  const { dispatch } = useContext(Store)

  const deleteSingleToDo = async (todo) => {
    const response = await deleteToDo(todo)
    if(response.status === 200){
      dispatch({ type: 'remove-todo', payload: todo })
    }
  }

  const updateSingleToDo = (todo) => {
    setTemporalAuxState(todo)
  }

  const updateCheck = async (todo) => {
    const checkTodo = { ...todo, done: !todo.done }
    const newState = await updateToDo(checkTodo)
    if(newState){
      dispatch({ type: 'update-todo', payload: newState })
    }
  }

  const completeToDo = {
    textDecoration: "line-through"
  };

  return (
    <div style={{ border: 'groove black' }}>
      <h3 style={todo.done ? completeToDo: {}}>{todo.title}</h3>
      <input type='checkbox' checked={todo.done} onChange={() => updateCheck(todo)} />
      <FontAwesomeIcon fixedWidth  icon={faTrash} onClick={() => deleteSingleToDo(todo)}>Delete</FontAwesomeIcon>
      {!todo.done && <FontAwesomeIcon fixedWidth  icon={faPenToSquare}  onClick={() => updateSingleToDo(todo)}>Update</FontAwesomeIcon>}
    </div>
  )
}

export default Todo
