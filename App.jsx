import { useState } from 'react'
import { BrowserRouter } from 'react-router-dom'
import ResponsiveDrawer from './Pages/Dashbaord'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter> 
    <ResponsiveDrawer/>
    </BrowserRouter>

    </>
  )
}

export default App
