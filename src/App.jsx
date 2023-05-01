import { Navigate, Route, Routes } from "react-router-dom";
import HomePage from "./HomePage";
import LoginPage from "./Login/LoginPage";
import Signup from "./Signup/Signup";
import Read from "./Read/Read";
import PassReset from "./PassReset/PassReset";
import ConfirmCode from "./confirmCode/confirmCode";

const App = () => {
  return (
    <div className="w-100 h-100">
      <Routes>
        <Route path="/">
          <Route index element={<HomePage />} />
          <Route path="ورود" element={<LoginPage />} />
          <Route path="ثبت-نام" element={<Signup />} />
          <Route path=":pageID" element={<Read />} />
          <Route path="ریست-پسورد" element={<PassReset />}/>
          <Route path="کد-تایید" element={<ConfirmCode />} />
        </Route>
        <Route path="*" element={<Navigate to={"/"} />} />
      </Routes>
    </div>
  );
};

export default App;
