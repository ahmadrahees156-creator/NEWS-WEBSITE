import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'

function App() {
  

  return (
    <div className='min-h-screen flex flex-col'>
      
      <header/>

      <Home/>

      <Footer/>

    </div>
  )
}

export default App
