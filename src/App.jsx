import { useState } from 'react'
import {Header} from './Components/Header'
import {Footer} from './Components/Footer' 
import {ShopingCard} from './Components/ShopingCard'
import {Card} from './Components/Card'


import './App.css'

function App() {
  const[count,setCount] = useState(0)

  return (
    <>
      <Header />
      
      <ShopingCard />

      <Card/>
      
      <div className="container">
        <h1 className="text-center text-5xl mt-10 text-pink-300">
          Count--{count}
        </h1>
        <button
          className="
        w-auto mx-auto text-blue-300 block mt-10 rounded-xl  bg-green-200 p-2 hover:bg-green-400"
          onClick={() => setCount((prevState) => prevState + 1)}
        >
          Incrise it
        </button>
      </div>

      <Footer />
    </>
  );
}



export default App
