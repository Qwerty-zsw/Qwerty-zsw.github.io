import HomePage from "./HomePage";
import LoginPage from "./Login/LoginPage";
import Signup from "./Signup/Signup";
import Read from "./Read/Read";
import PassReset from "./PassReset/PassReset";
import ConfirmCode from "./confirmCode/confirmCode";
import NotFound from "./NotFound";
import { Navigate } from "react-router-dom";

const routes = [
  { path: "/", element: <HomePage /> },
  { path: "/ورود", element: <LoginPage /> },
  { path: "/ثبت-نام", element: <Signup /> },
  { path: "game/:pageID", element: <Read /> },
  { path: "/ریست-پسورد", element: <PassReset /> },
  { path: "/کد-تایید", element: <ConfirmCode /> },
  { path: "/notfound", element: <NotFound /> },
  { path: "/*", element: <Navigate to="/notfound" replace /> },
];

export default routes;
