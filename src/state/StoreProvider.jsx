import React, { createContext, useEffect, useReducer } from 'react'
import reducer from './Reducer';

const initialState = [
    {
        categoryId: '1',
        categoryName: 'sports',
        listOfToDos: [
            {
                id: '3',
                title: 'running',
                cateoryId: '1',
                done: false
            }
        ]
    },{
        categoryId: '2',
        categoryName: 'swimming',
        listOfToDos: [
            {
                id: '4',
                title: 'swim faster',
                cateoryId: '2',
                done: false
            }
        ]
    }
]

const Store = createContext(initialState);

const StoreProvider = ( { children }) => {

    //dispatch is the trigger that execute the state changes
    const [state, dispatch] = useReducer(reducer, initialState)

    useEffect(() => {
        
    })

  return (
        <Store.Provider value={{state, dispatch}}>
          {children}
        </Store.Provider>
    )
}

export default StoreProvider
export {Store, initialState}
