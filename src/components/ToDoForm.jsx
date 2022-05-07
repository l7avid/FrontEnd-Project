import { useContext, useState } from 'react'
import { saveToDo } from '../services/ToDoServices'
import { Store } from '../state/StoreProvider'

const TodoForm = ({ categoryParent }) => {
  const { dispatch } = useContext(Store)
  const [userInput, setUserInput] = useState('')
  const onSubmitToDo = async (e) => {
    e.preventDefault()
    const postTodo = { title: userInput, categoryId: categoryParent.categoryId, done: false }
    const newState = await saveToDo(postTodo)
    if(newState){
      dispatch({ type: 'add-todo', payload: newState })
      setUserInput("")
    }
  }
  return (
    <form onSubmit={(e) => onSubmitToDo(e)}>
      <label>
        <input placeholder='ToDo Name' onChange={(e) => setUserInput(e.target.value)} value={userInput} />
      </label>
    </form>
  )
}

export default TodoForm