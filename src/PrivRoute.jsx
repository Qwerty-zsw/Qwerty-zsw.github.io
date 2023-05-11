import { Navigate, Outlet } from "react-router-dom";
import { showLogin } from "./util";

const PrivRoute = ({children}) => {
  const isUserLogin = showLogin("Masoud");

  return <div>{isUserLogin ? <Outlet /> : <Navigate to={"/ورود"} />}</div>;
};
// meth1: you have to put this component to elements component in "routes.jsx"
// => e: this> {children} <this
// children = other component details

// meth2: render THIS element in "routes.jsx with /* path
// add ,children property with array value
// the continuation is the same as the routes method but path without "/"
// like this=> "panel"

export default PrivRoute;
