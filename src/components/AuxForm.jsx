import { useContext, useState } from 'react'
import { saveToDo } from '../services/ToDoServices'
import { Store } from '../state/StoreProvider'

const AuxForm = ({ temporalAuxState, setTemporalAuxState }) => {
  const { dispatch } = useContext(Store)
  const onSubmitToDo = async (e) => {
    e.preventDefault()
    const putTodo = { ...temporalAuxState }
    const newState = await saveToDo(putTodo)
    if(newState){
      dispatch({ type: 'update-todo', payload: newState })
      setTemporalAuxState({})
    }
  }
  return (
    <form onSubmit={(e) => onSubmitToDo(e)}>
      <label>
        <input placeholder='Update ToDo' onChange={(e) => setTemporalAuxState({...temporalAuxState, title: e.target.value})} value={temporalAuxState.title} />
      </label>
    </form>
  )
}

export default AuxForm