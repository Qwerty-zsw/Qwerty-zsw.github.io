import { Navigate } from "react-router-dom";
import { showLogin } from "./util";

const PrivRoute = ({ children }) => {
  const isUserLogin = showLogin("Masoud");

  return <div>{isUserLogin ? { children } : <Navigate to={"/ورود"} />}</div>;
};
// you have to put this component to elements component in "routes.jsx"
// => e: this> {children} <this
// children = other component details

export default PrivRoute;
