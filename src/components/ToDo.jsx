import { useContext } from 'react'
import { deleteToDo, updateToDo } from '../services/ToDoServices'
import { Store } from '../state/StoreProvider'
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
    <div style={{ border: 'solid black 1px' }}>
      <h3 style={todo.done ? completeToDo: {}}>{todo.title}</h3>
      <input type='checkbox' checked={todo.done} onChange={() => updateCheck(todo)} />
      <button onClick={() => deleteSingleToDo(todo)}>Delete</button>
      {!todo.done && <button onClick={() => updateSingleToDo(todo)}>Update</button>}
    </div>
  )
}

export default Todo
