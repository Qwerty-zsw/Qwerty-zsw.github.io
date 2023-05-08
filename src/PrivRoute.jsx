import { Navigate } from "react-router-dom";
import { showLogin } from "./util";

const PrivRoute = ({ children }) => {
  const isUserLogin = showLogin("Masoud");

  return <div>{isUserLogin ? { children } : <Navigate to={"/ورود"} />}</div>;
};

export default PrivRoute;
