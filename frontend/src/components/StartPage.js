import React from "react";
import { Link } from "react-router-dom";
function StartPage() {
  return (
    <div className="">
      <div className="  flex justify-center mx-4 bg-gray-100  border-2 border-gray-400 border-solid rounded-sm ">
        <button
          className="bg-withe m-96  py-4 px-16 border-blue-400 border-4 rounded-full  
      "
        >
          <Link
            className="  font-extrabold font-sans text-xl text-blue-400"
            to="/categories/"
          >
            Perfumes
          </Link>
        </button>
      </div>
    </div>
  );
}

export default StartPage;
