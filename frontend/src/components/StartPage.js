import React from 'react'
import { Link } from 'react-router-dom'
function StartPage() {
  return (
    <div className='grid justify-items-center'>
      <div className='grid justify-items-center my-40'>
      <img  style={{width: "15%"}} src="https://images.unsplash.com/photo-1535683577427-740aaac4ec25?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" alt="" />
  <button className='mx-96 p-3'>
    <Link to='/categories/'>Perfumes</Link>
  </button>
      </div>
      
    
    </div>
  )
}

export default StartPage