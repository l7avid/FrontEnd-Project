import { useState } from 'react'
import './App.css'
import CategoryForm from './components/CategoryForm'
import ListOfCategory from './components/ListOfCategory'
import StoreProvider from './state/StoreProvider'

function App() {

  return (
    <StoreProvider>
      <CategoryForm />
      <ListOfCategory />
    </StoreProvider>
  )
}

export default App
