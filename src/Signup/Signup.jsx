import "./Signup.css";
import { useState } from "react";
import {
  MDBBtn,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBCheckbox,
  MDBIcon,
} from "mdb-react-ui-kit";

function Signup() {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
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
            wrapperClass="mb-4"
            label="نام کاربری"
            size="lg"
            id="form1"
            type="text"
          />
          <MDBInput
            wrapperClass="mb-4"
            label="ایمیل"
            size="lg"
            id="form2"
            type="email"
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
          <MDBInput
            wrapperClass="mb-4 w-100"
            labelClass="text-white"
            label="تکرار رمز عبور"
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

          <div className="d-flex flex-row justify-content-center mb-4">
            <MDBCheckbox
              name="flexCheck"
              id="flexCheckDefault"
              label="تمام قوانین را خوانده ام و موافقم"
            />
          </div>
          <MDBBtn className="mb-4 w-100 gradient-custom-4 text-black" size="lg">
            ثبت نام
          </MDBBtn>
        </MDBCardBody>
      </MDBCard>
    </MDBContainer>
  );
}

export default Signup;
