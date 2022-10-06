import { Link } from "react-router-dom";
/* import "./index.scss"; */
/* import { BiUser } from "react-icons/bi"; */
import useUser from "../context/useUser";
import { FcRight } from "react-icons/fc";
import { MdSettingsVoice } from "react-icons/md";

export default function Layout(props) {
  const user = useUser();

  const accountLink = user.data ? "/account" : "/login";
  const linkLable = user.data ? user.data.name : "Login";
  return (
    <div className="Layout ">
      <header className="flex   justify-around p-5 mx-4 bg-withe   border-gray-400 rounded-sm ">
        {/* <div className="h-15 w-15 bg-blue-700">
          <h1
            className="  
      font-extrabold font-sans p-3 text-2xl "
            style={{ color: "white" }}
          >
            Mimi Voice Asis
          </h1>
        </div>

        <div className="h-15 w-15 bg-blue-700">
          <h1
            className="  
      font-extrabold font-sans p-3 text-2xl "
            style={{ color: "white" }}
          >
            Mimi Voice Asis
          </h1>
        </div> */}
        <div className="bg-withe   py-4 px-16 border-blue-400 hover:bg-blue-200  border-4 rounded-full">
          <h1
            className="  
            font-extrabold font-sans text-xl text-blue-400 hover:text-white"
          >
            <MdSettingsVoice /> Mimi
            <FcRight />
          </h1>
        </div>
        <button className="bg-withe   py-4 px-16 border-blue-400 border-4 hover:bg-blue-200  rounded-full">
          {" "}
          <Link
            className="font-extrabold font-sans text-xl hover:text-white text-blue-400"
            to={accountLink}
          >
            {linkLable}
          </Link>
        </button>
      </header>
      <main>{props.children}</main>
    </div>
  );
}
