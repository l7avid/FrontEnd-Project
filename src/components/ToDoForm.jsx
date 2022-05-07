import { useContext, useState } from 'react'
import { createTodo } from '../services/ToDoServices'
import { Store } from '../state/StoreProvider'

const TodoForm = ({ categoryParent }) => {
  const { dispatch } = useContext(Store)
  const [userInput, setUserInput] = useState('')
  const onSubmit = async (e) => {
    e.preventDefault()
    const postTodo = { title: userInput, categoryId: categoryParent.id, done: false }
    //await fetch
    const newState = await createTodo(postTodo)
    // dispatch
    dispatch({ type: 'add-todo', payload: newState })
  }
  return (
    <form onSubmit={(e) => onSubmit(e)}>
      <label>
        <input placeholder='ToDo Name' onChange={(e) => setUserInput(e.target.value)} value={userInput} />
      </label>
    </form>
  )
}

export default TodoForm