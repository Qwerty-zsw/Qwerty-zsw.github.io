import HomePage from "./HomePage";
import LoginPage from "./Login/LoginPage";
import Signup from "./Signup/Signup";
import Read from "./Read/Read";
import PassReset from "./PassReset/PassReset";
import ConfirmCode from "./confirmCode/confirmCode";
import NotFound from "./NotFound";

const routes = [
  { path: "/", element: <HomePage /> },
  { path: "/ورود", element: <LoginPage /> },
  { path: "/ثبت-نام", element: <Signup /> },
  { path: "/:pageID", element: <Read /> },
  { path: "/ریست-پسورد", element: <PassReset /> },
  { path: "/کد-تایید", element: <ConfirmCode /> },
  { path: "/*", element: <NotFound /> },
];

export default routes;
