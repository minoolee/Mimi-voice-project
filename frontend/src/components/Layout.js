import { Link } from "react-router-dom";
import useUser from "../context/useUser";
/* import { FcRight } from "react-icons/fc";
import { MdSettingsVoice } from "react-icons/md"; */

export default function Layout(props) {
  const user = useUser();

  const accountLink = user.data ? "/account" : "/login";
  const linkLable = user.data ? user.data.name : "Login";
  return (

    <div className="h-24">
      
      <header className="flex justify-around font-sans ">
      <img style={{width:"5%"}} src="https://media0.giphy.com/media/Quso5mitLwTArJkLFC/200w.gif?cid=82a1493bsse48fhqo3d4xe7xmbdbmkfhbnqm6fazlc8bhz00&rid=200w.gif&ct=g" alt="" />
       {/*  <button className="border-1 rounded-full bg-black w-32 h-8 m-8"> <h1 className="text-xl text-white" >Mimi</h1></button> */}
       <button className="text-white border-1 rounded-full bg-black w-32 h-8 m-8 ">{/* {" "}  */}<Link to={accountLink}>
         {linkLable}
        </Link></button>

      </header>
      <main>{props.children}</main>
    </div>
  );
}
