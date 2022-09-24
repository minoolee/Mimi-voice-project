import React from 'react'
import { Link } from 'react-router-dom'
function StartPage() {
  return (
    <div>
      <h1>Hi I am Mimi </h1>
      <h3>Click on me</h3>
      <div>
  <button>
    <Link to='/categories/'>Categorie</Link>
  </button>
    </div> 
    </div>
  )
}

export default StartPage