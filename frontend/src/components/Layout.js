import { Link } from "react-router-dom";
/* import "./index.scss"; */
/* import { BiUser } from "react-icons/bi"; */
import useUser from "../context/useUser";

export default function Layout(props) {
  const user = useUser();

  const accountLink = user.data ? "/account" : "/login";
  const linkLable = user.data ? user.data.name : "Login"
  return (
    <div className="Layout">
      <header className="flex justify-around p-5 ">
      <h1 className="text-red-300">Mimi Voice Asis</h1>
       <button className="text-red-300"> <Link to={accountLink}>
         {linkLable}
        </Link></button>
      </header>
      <main>{props.children}</main>
    </div>
  );
}
