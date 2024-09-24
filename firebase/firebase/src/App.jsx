import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Allroutes from './Allroutes'
import Navbar from './Componets/Navbar'

function App() {

  return (
    <>
      <Navbar />
      <Allroutes />
    </>
  )
}

export default App
