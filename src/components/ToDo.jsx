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
    textDecoration: "line-through",
    color: "green",
    fontSize: 20,
    marginLeft: 10
  };

  return (
    <div style={{ border: 'solid 2px', marginTop: 10, marginBottom: 10,  marginRight: 20}}>
      <h3 style={todo.done ? completeToDo: { color: "crimson", fontSize: 20, marginLeft: 10}}>{todo.title}</h3>
      <input type='checkbox' checked={todo.done} onChange={() => updateCheck(todo)} />
      <FontAwesomeIcon style={{backgroundColor: "powderblue"}} fixedWidth border icon={faTrash} onClick={() => deleteSingleToDo(todo)}>Delete</FontAwesomeIcon>
      {!todo.done && <FontAwesomeIcon fixedWidth border style={{backgroundColor: "powderblue"}} icon={faPenToSquare}  onClick={() => updateSingleToDo(todo)}>Update</FontAwesomeIcon>}
    </div>
  )
}

export default Todo
