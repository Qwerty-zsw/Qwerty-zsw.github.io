import "./PassReset.css"
import { useState } from "react";
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
} from "mdb-react-ui-kit";

const PassReset = () => {

  const userReg = /^[a-zA-Z0-9_-]{3,16}$/;
  const emailReg = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const [InpVal, setInpVal] = useState("");
  const [regErr, setregErr] = useState(true);
  const [borderColor, setborderColor] = useState(true);
  
  const clickHandler = (e) => {
    e.preventDefault();

    const userCheck = userReg.test(InpVal);
    const emailCheck = emailReg.test(InpVal);

    if (userCheck || emailCheck) {
      setregErr(true);
      setborderColor(true);
    } else {
      setregErr(false);
      setborderColor(false);
    }
  };

  return (
    <>
      <MDBContainer
        fluid
        className="w-100 h-100 d-flex justify-content-center align-items-center bg-image"
        style={{ backgroundImage: `url("https://wallpaperaccess.com/full/5492411.jpg")` }}
      >
        <MDBRow>
          <MDBCol col="12">
            <MDBCard
              className="text-white my-5 mx-auto bg-blur reset-size"
              style={{ borderRadius: "3rem", minWidth: "550px" }}
            >
              <MDBCardBody className="p-5 d-flex flex-column align-items-center mx-auto w-100">
                <h2 className="fw-bold mb-2 text-uppercase">ریست پسورد</h2>
                <p className="text-white-50 mb-5 mt-2">
                  لطفا نام کاربری یا ایمیل خود را وارد کنید
                </p>
                <MDBInput
                  wrapperClass={`mb-4 w-100 ${
                    borderColor ? "border-transparent" : "zzz"
                  }`}
                  labelClass="text-white"
                  label="نام کاربری یا ایمیل"
                  id="formControlLg"
                  type="email"
                  size="lg"
                  value={InpVal}
                  onChange={(e) => setInpVal(e.target.value)}
                />
                <small
                  className={`w-100 text-danger mb-3 ${
                    regErr ? "d-none" : "d-block"
                  }`}
                >
                  ایمیل یا نام کاربری اشتباه است
                </small>
                <MDBBtn
                  outline
                  className="mx-2 px-5 rounded-5"
                  color="light"
                  rippleColor="white"
                  size="lg"
                  onClick={clickHandler}
                >
                  ارسال
                </MDBBtn>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </>
  );
};

export default PassReset;
