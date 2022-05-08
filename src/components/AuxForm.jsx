import { useContext } from 'react'
import { updateToDo } from '../services/ToDoServices'
import { Store } from '../state/StoreProvider'

const AuxForm = ({ temporalAuxState, setTemporalAuxState }) => {
  const { dispatch } = useContext(Store)
  const onSubmitToDo = async (e) => {
    e.preventDefault()
    const putTodo = { ...temporalAuxState }
    const newState = await updateToDo(putTodo)
    if(newState){
      dispatch({ type: 'update-todo', payload: newState })
      setTemporalAuxState({})
    }
  }
  return (
    <form onSubmit={(e) => onSubmitToDo(e)}>
      <label>
        <input style={{backgroundColor: "ivory", marginTop: 10}} placeholder='Update ToDo' onChange={(e) => setTemporalAuxState({...temporalAuxState, title: e.target.value})} value={temporalAuxState.title} />
      </label>
    </form>
  )
}

export default AuxForm