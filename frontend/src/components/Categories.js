import React from 'react'
import { Link } from 'react-router-dom'
function Categories() {
  return (
    <div>
       <div>
        <div>
          <img src="https://images.unsplash.com/photo-1596516109345-3ad1086ca0a0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=465&q=80" alt="" />
          <button><Link to="/males/">Males</Link></button> 
        </div>
        <div>
          <img src="" alt="" />
          <button><Link to="/females/">Females</Link></button> 
        </div>
      

    </div>
    </div>
  )
}

export default Categories