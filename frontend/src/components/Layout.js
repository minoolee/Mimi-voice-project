import { Link } from "react-router-dom";
/* import "./index.scss"; */
/* import { BiUser } from "react-icons/bi"; */
import useUser from "../context/useUser";

export default function Layout(props) {
  const user = useUser();

  const accountLink = user.data ? "/account" : "/login";
  const linkLable = user.data ? user.data.name : "Login";
  return (
    <div className="Layout ">
      <header className="flex   justify-around p-5 mx-4 bg-withe   border-gray-400 rounded-sm ">
        <div className="h-15 w-15 bg-blue-700">
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
        </div>
        <div className="h-15 w-15 bg-blue-700">
          <h1
            className="  
      font-extrabold font-sans p-3 text-2xl "
            style={{ color: "white" }}
          >
            Mimi Voice Asis
          </h1>
        </div>
        <button className="text-red-300">
          {" "}
          <Link
            className="font-extrabold font-sans text-2xl text-white"
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
