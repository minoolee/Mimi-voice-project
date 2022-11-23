import React from 'react'
import { Link } from "react-router-dom";

export const ShortExpla = () => {
  return (
    <div className="bg-black text-white font-serif">
        <h1 className='text-center text-7xl p-64'>Hallo</h1>
        <button><Link id="hamzah" className="text-black" to="/hamzah/">
          idee from
        </Link></button>
    </div>
  )
}
