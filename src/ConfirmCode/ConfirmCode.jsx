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

const ConfirmCode = () => {

  const confirmReg = /^[0-9]{6}$/;

  const [InpVal, setInpVal] = useState("");
  const [regErr, setregErr] = useState(true);
  const [borderColor, setborderColor] = useState(true);
  
  const clickHandler = (e) => {
    e.preventDefault();

    const confirmCheck = confirmReg.test(InpVal);

    if (confirmCheck) {
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
                <h2 className="fw-bold mb-2 text-uppercase">کد تایید</h2>
                <p className="text-white-50 mb-5 mt-2">
                  لطفا کد تایید ارسال شده را وارد کنید
                </p>
                <MDBInput
                  wrapperClass={`mb-4 w-100 ${
                    borderColor ? "border-transparent" : "zzz"
                  }`}
                  labelClass="text-white"
                  label="کد تایید"
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
                  کد تایید مطابقت ندارد
                </small>
                <MDBBtn
                  outline
                  className="mx-2 px-5 rounded-5"
                  color="light"
                  rippleColor="white"
                  size="lg"
                  onClick={clickHandler}
                >
                  تایید
                </MDBBtn>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </>
  );
};

export default ConfirmCode;
