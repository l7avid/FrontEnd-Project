import { useContext } from 'react'
import { deleteToDo, updateToDo } from '../services/ToDoServices'
import { Store } from '../state/StoreProvider'
const Todo = ({ todo }) => {
  const { dispatch } = useContext(Store)

  const deleteSingleToDo = async (todo) => {
    const response = await deleteToDo(todo)
    if(response.status === 200){
      dispatch({ type: 'remove-todo', payload: todo })
    }
  }

  const updateSingleToDo = async (todo) => {
    const response = await updateToDo(todo)
    if(response.status === 200){
      dispatch({ type: 'update-todo', payload: response })
    }
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
      <button onClick={() => updateSingleToDo(todo)}>Update</button>
    </div>
  )
}

export default Todo
