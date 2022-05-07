import React, { createContext, useEffect, useReducer } from 'react'
import { getCategory } from '../services/CategoryServices';
import reducer from './Reducer';

/*const initialState = [
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
]*/

export const Store = createContext({});

const StoreProvider = ( { children }) => {

    //dispatch is the trigger that execute the state changes
    const [state, dispatch] = useReducer(reducer, [])

    const loadCategory = async () => {
        const data = await getCategory()
        console.log(data);
        dispatch({type: "get-category", payload: data })
    }

    useEffect(() => {
        loadCategory()
    },[])

  return (
        <Store.Provider value={{state, dispatch}}>
          {children}
        </Store.Provider>
    )
}

export default StoreProvider
