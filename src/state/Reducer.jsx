function reducer(state, action) {
    switch(action.type){
        case 'add-category':
            return [...state, action.payload]
        case 'remove-category':
            return state.filter((category) => category.categoryId !== action.payload.categoryId)
        case 'get-category':
            return action.payload
        case 'add-todo':
            return action.payload
        case 'remove-todo':
            const parentCategory = state.find((category) => category.categoryId === action.payload.categoryId)
            if (parentCategory) {
              const filteredList = parentCategory.toDos.filter((todo) => todo.id !== action.payload.id)
              const newState = state.map((category) =>
                category.categoryId === parentCategory.categoryId ? { ...parentCategory, toDos: filteredList } : category
              )
              return newState
            }
        case 'update-todo':
            return action.payload
        default:
            throw Error("Action not allowed")
    }
}

export default reducer