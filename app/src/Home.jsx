import React from 'react'
import { useState } from 'react'
import axios from 'axios'
export default function Home() {
    const [mess, setMess] = useState('')
  
    const handleClick = () => {
      axios.get("http://localhost:3002/")
        .then((response) => {
          console.log(response.data)
          setMess(response.data)
        })
        .catch((error) => {
          console.error(error)
        })
    }
  
    return (
      <div>
          <button onClick={handleClick}>Cliquez ici</button>
          {mess && <p>{mess}</p>}      
      </div>
    )
  }