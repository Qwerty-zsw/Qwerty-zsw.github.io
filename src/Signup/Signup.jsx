import "./Signup.css";
import { useState } from "react";
import {
  MDBBtn,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBCheckbox,
} from "mdb-react-ui-kit";

const userReg = /^[a-zA-Z0-9_-]{3,16}$/;
const emailReg = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const passReg = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;

function Signup() {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  const [InpVal, setInpVal] = useState("");
  const [InpValEmail, setInpValEmail] = useState("");
  const [InpValpass, setInpValpass] = useState("");
  const [regErr, setregErr] = useState(true);
  const [borderColor, setborderColor] = useState(true);

  const clickHandler = (e) => {
    e.preventDefault();
    
    const userCheck = userReg.test(InpVal);
    const emailCheck = emailReg.test(InpVal);
    const passCheck = passReg.test(InpValpass);

    if ((passCheck && emailCheck) || (userCheck && passCheck)) {
      setregErr(true);
      setborderColor(true);
    } else {
      setregErr(false);
      setborderColor(false);
    }
  };

  return (
    <MDBContainer
      fluid
      className="d-flex w-100 h-100 align-items-center justify-content-center bg-image"
      style={{
        backgroundImage: "url(../../public/wzG.jpg)",
      }}
    >
      <MDBCard
        className="bg-blur py-4 px-1 text-muted"
        style={{ maxWidth: "600px", borderRadius: "3rem" }}
      >
        <MDBCardBody className="px-5">
          <h2 className="text-uppercase text-center mb-5">ایجاد حساب کاربری</h2>
          <MDBInput
            wrapperClass={`mb-4 ${
              borderColor ? "border-transparent" : "zzz"
            }`}
            label="نام کاربری"
            size="lg"
            id="form1"
            type="text"
            value={InpVal}
            onChange={(e) => setInpVal(e.target.value)}
          />
          <MDBInput
            wrapperClass={`mb-4 ${
              borderColor ? "border-transparent" : "zzz"
            }`}
            label="ایمیل"
            size="lg"
            id="form2"
            type="email"
            value={InpValEmail}
            onChange={(e) => setInpValEmail(e.target.value)}
          />
          <MDBInput
            wrapperClass={`mb-4 w-100 ${
              borderColor ? "border-transparent" : "zzz"
            }`}
            labelClass="text-white"
            label="رمز عبور"
            id="formControlLg"
            value={InpValpass}
            onChange={(e) => setInpValpass(e.target.value)}
            type={showPassword ? "text" : "password"}
            size="lg"
          />
          <small
                  className={`w-100 text-danger mb-3 ${
                    regErr ? "d-none" : "d-block"
                  }`}
                >
                  ایمیل/نام کاربری یا پسورد اشتباه است
                </small>

          <div className="form-check mb-4 d-flex justify-content-start w-100">
            <input
              className="form-check-input"
              type="checkbox"
              id="showPasswordCheckbox"
              checked={showPassword}
              onChange={togglePasswordVisibility}
            />
            <label
              className="form-check-label text-white fs-9"
              htmlFor="showPasswordCheckbox"
            >
              نمایش گذرواژه
            </label>
          </div>

          <div className="d-flex flex-row justify-content-center mb-4">
            <MDBCheckbox
              name="flexCheck"
              id="flexCheckDefault"
              label="تمام قوانین را خوانده ام و موافقم"
            />
          </div>
          <MDBBtn
            className="mb-4 w-100 gradient-custom-4 text-black"
            size="lg"
            onClick={clickHandler}
          >
            ثبت نام
          </MDBBtn>
        </MDBCardBody>
      </MDBCard>
    </MDBContainer>
  );
}

export default Signup;
