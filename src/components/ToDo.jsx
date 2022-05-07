import { useContext } from 'react'
import { Store } from '../state/StoreProvider'
const Todo = ({ todo }) => {
  const { dispatch } = useContext(Store)

  const deleteToDo = async (todo) => {
    // fetch METHOD DELETE
    dispatch({ type: 'remove-todo', payload: todo })
  }

  const updateToDo = async (todo) => {
    // fetch METHOD PUT
    // const checkTodo = { ...todo, done: !todo.done }
    // const newState = await fetch('su backend', { method: 'PUT', body: JSON.stringify(checkTodo) })
    // dispatch({ type: 'update-todo', payload: newState })
    dispatch({ type: 'update-todo', payload: { ...todo, done: !todo.done } })
  }

  return (
    <div style={{ border: 'solid black 1px' }}>
      <h3>{todo.title}</h3>
      <input type='checkbox' value={todo.done} checked={() => updateToDo(todo)} />
      <button onClick={() => deleteToDo(todo)}>Delete</button>
      <button>Update</button>
    </div>
  )
}

export default Todo
