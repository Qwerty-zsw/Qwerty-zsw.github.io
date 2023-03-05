import { useState } from "react";
import "./LoginPage.css";
import "mdb-react-ui-kit/dist/css/mdb.rtl.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { LinkContainer } from "react-router-bootstrap";
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBIcon,
} from "mdb-react-ui-kit";

const userReg = /^[a-zA-Z0-9_-]{3,16}$/;
const emailReg = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const passReg = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const [InpVal, setInpVal] = useState("");
  const [InpValpass, setInpValpass] = useState("");
  const [regErr, setregErr] = useState(true);
  const [borderColor, setborderColor] = useState(true);

  function clickHandler(e) {
    e.preventDefault()

    const userCheck = userReg.test(InpVal);
    const emailCheck = emailReg.test(InpVal);
    const passCheck = passReg.test(InpValpass);
  
    if ( emailCheck || userCheck && passCheck) {
      setregErr(true);
      setborderColor(true);
    } else {
      setregErr(false);
      setborderColor(false);
    }
  }

  return (
    <>
      <MDBContainer
        fluid
        className="d-flex justify-content-center align-items-center w-100 h-100 bg-image"
        style={{ backgroundImage: `url("../../public/csG.jpg")` }}
      >
        <MDBRow>
          <MDBCol col="12">
            <MDBCard
              className="text-white my-5 mx-auto bg-blur"
              style={{ borderRadius: "3rem", maxWidth: "400px" }}
            >
              <MDBCardBody className="p-5 d-flex flex-column align-items-center mx-auto w-100">
                <h2 className="fw-bold mb-2 text-uppercase">ورود</h2>
                <p className="text-white-50 mb-5 mt-2">
                  لطفا نام کاربری و رمزعبور خود را وارد کنید
                </p>
                <MDBInput
                  wrapperClass={`mb-4 border-0 w-100 ${
                    borderColor ? "border-success" : "border-danger"
                  }`}
                  labelClass="text-white"
                  label="نام کاربری یا ایمیل"
                  id="formControlLg"
                  type="email"
                  size="lg"
                  value={InpVal}
                  onChange={(e) => setInpVal(e.target.value)}
                />
                <MDBInput
                  wrapperClass="mb-4 w-100"
                  labelClass="text-white"
                  label="رمز عبور"
                  id="formControlLg"
                  value={InpValpass}
                  onChange={(e) => setInpValpass(e.target.value)}
                  type={showPassword ? "text" : "password"}
                  size="lg"
                  icon={
                    <MDBIcon
                      icon={showPassword ? "eye-slash" : "eye"}
                      className="clickable"
                      onClick={togglePasswordVisibility}
                    />
                  }
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

                <p className="small mb-3 pb-lg-2">
                  <a href="#">پسورد خود را فراموش کرده اید؟</a>
                </p>
                <MDBBtn
                  outline
                  className="mx-2 px-5 rounded-5"
                  color="light"
                  rippleColor="white"
                  size="lg"
                  onClick={clickHandler}
                >
                  ورود
                </MDBBtn>
                <div className="d-flex flex-row mt-3 mb-5">
                  <MDBBtn
                    tag="a"
                    color="none"
                    className="py-3 px-4 rounded-pill"
                    style={{ color: "white" }}
                  >
                    <MDBIcon fab icon="facebook-f" size="lg" />
                  </MDBBtn>

                  <MDBBtn
                    tag="a"
                    color="none"
                    className="py-3 px-4 rounded-pill"
                    style={{ color: "white" }}
                  >
                    <MDBIcon fab icon="twitter" size="lg" />
                  </MDBBtn>

                  <MDBBtn
                    tag="a"
                    color="none"
                    className="py-3 px-4 rounded-pill"
                    style={{ color: "white" }}
                  >
                    <MDBIcon fab icon="google" size="lg" />
                  </MDBBtn>
                </div>
                <div>
                  <p className="mb-0">
                    حساب کاربری ندارید؟{" "}
                    <LinkContainer to="/ثبت-نام">
                      <a class="fw-bold">ثبت نام</a>
                    </LinkContainer>
                  </p>
                </div>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </>
  );
};

export default LoginPage;
