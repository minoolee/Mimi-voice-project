import React from "react";
import { Link } from "react-router-dom";
function StartPage() {
  return (
    <div className="">
      <div className=" flex justify-center mx-4 bg-gray-100 border-2 border-gray-400 border-solid rounded-sm ">
      <img  style={{width: "15%"}} src="https://images.unsplash.com/photo-1535683577427-740aaac4ec25?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" alt="" />
  <button className="bg-withe m-96  py-4 px-16 border-blue-400 hover:text-white border-4 rounded-full  hover:bg-blue-200">
    <Link className=" font-extrabold font-sans text-xl hover:text-white text-blue-400" to='/categories/'>Perfumes</Link>
  </button>
      </div>
      
    
    </div>
  )
}

export default StartPage;