import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AnimeSearch from './hooks/AnimeSearch'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <AnimeSearch/>
      </div>
     
    </>
  )
}

export default App
