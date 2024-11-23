import { useState } from 'react'
import './App.css'
import Item from './component/Item'
import Cart from './component/Cart'

function App() {
  

  return (
    <>
      <div className='App'>
        <Item name="HP Victus" price="400"/>
        <Item name="HP Victus" price="400"/>
        <Cart/>
      </div>
    </>
  )
}

export default App
