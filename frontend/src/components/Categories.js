import React from "react";
import { Link } from "react-router-dom";
function Categories() {
  return (
    <div className="  h-screen  mx-4 bg-gray-100  border-2 border-gray-400 border-solid rounded-sm">
      <div className=" inline-flex">
        <img
          style={{ width: "15%" }}
          src="https://images.unsplash.com/photo-1596516109345-3ad1086ca0a0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=465&q=80"
          alt=""
        />
        <button className="bg-red-700 m-96  py-4 px-16  border-red-700 border-4 rounded-full hover:bg-blue-500  hover:border-blue-500">
          <Link
            className="  font-extrabold font-sans text-xl text-white"
            to="/males/"
          >
            Males
          </Link>
        </button>
        <img
          style={{ width: "15%" }}
          src="https://images.unsplash.com/photo-1593631487803-dac1b9775bdb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
          alt=""
        />
        <button className="bg-red-700 m-96  py-4 px-16  border-red-700 border-4 rounded-full hover:bg-blue-500 hover:border-blue-500">
          <Link
            className="  font-extrabold font-sans text-xl text-white"
            to="/females/"
          >
            Females
          </Link>
        </button>
      </div>
    </div>
  );
}

export default Categories;
