import { useContext } from 'react'
import { Store } from '../state/StoreProvider'
import Category from './Category'

const ListOfCategory = () => {
  const { state } = useContext(Store)

  return (
    <>
      {state.map((category) => (
        <Category key={category.categoryId} category={category} />
      ))}
    </>
  )
}

export default ListOfCategory
