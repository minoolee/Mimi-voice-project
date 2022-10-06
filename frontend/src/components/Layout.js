import { Link } from "react-router-dom";
import useUser from "../context/useUser";
import { FcRight } from "react-icons/fc";
import { MdSettingsVoice } from "react-icons/md";

export default function Layout(props) {
  const user = useUser();

  const accountLink = user.data ? "/account" : "/login";
  const linkLable = user.data ? user.data.name : "Login"
  return (
    <div className="Layout">
      <header className="flex justify-around p-5 mx-4 bg-withe border-gray-400 rounded-sm ">
      <div className="bg-withe py-4 px-16 border-blue-400 hover:bg-blue-200 border-4 rounded-full">
      <h1  className="font-extrabold font-sans text-xl text-blue-400 hover:text-white"> <MdSettingsVoice />Mimi <FcRight /></h1>
      </div>
       <button className="bg-withe py-4 px-16 border-blue-400 border-4 hover:bg-blue-200 rounded-full">{" "} <Link to={accountLink}>
         {linkLable}
        </Link></button>
      </header>
      <main>{props.children}</main>
    </div>
  );
}
