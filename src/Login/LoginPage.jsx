import { useState } from "react";
import "./LoginPage.css";
import "mdb-react-ui-kit/dist/css/mdb.rtl.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
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
import { LinkContainer } from "react-router-bootstrap";

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <>
      <MDBContainer
        fluid
        className="d-flex justify-content-center align-items-center w-100 h-100 bg-image"
        style={{backgroundImage:`url("../../public/csG.jpg")`}}
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
                  wrapperClass="mb-4 border-0 w-100"
                  labelClass="text-white"
                  label="نام کاربری یا ایمیل"
                  id="formControlLg"
                  type="email"
                  size="lg"
                />
                <MDBInput
                  wrapperClass="mb-4 w-100"
                  labelClass="text-white"
                  label="رمز عبور"
                  id="formControlLg"
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
