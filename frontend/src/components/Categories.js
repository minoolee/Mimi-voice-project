import React from "react";
import { Link } from "react-router-dom";
function Categories() {
  return (
    <div className="  h-screen  mx-4 bg-gray-100  border-2 border-gray-400 border-solid rounded-sm">
      <div className=" inline-flex">
        <button className="bg-red-700 m-96  py-4 px-16  border-red-700 border-4 rounded-full hover:bg-blue-500  hover:border-blue-500">
          <Link
            className="  font-extrabold font-sans text-xl text-white"
            to="/males/"
          >
            Males
          </Link>
        </button>
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
