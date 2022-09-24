import React from 'react'
import { Link } from 'react-router-dom'
function Categories() {
  return (
    <div>
       <div>
      <button><Link to="/males/">Males</Link></button> 
      <button><Link to="/females/">Females</Link></button> 
    </div>
    </div>
  )
}

export default Categories