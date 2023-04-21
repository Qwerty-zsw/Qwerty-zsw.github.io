import "./PassReset.css";
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
} from "mdb-react-ui-kit";
import { useForm } from "react-hook-form";
import { Form } from "react-bootstrap";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const PassReset = () => {
  const schema = yup.object().shape({
    emailORuser: yup
      .string()
      .matches(
        /^(?:(?!.*\s)[a-zA-Z0-9]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+|[a-zA-Z0-9]+)$/,
        "ایمیل یا نام کاربری وجود ندارد!"
      )
      .min(4, "تعداد حروف کمتر از 4 کلمه است!")
      .required(),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const Onsubmit = (data) => {
    console.log(data);
  };

  return (
    <>
      <MDBContainer
        fluid
        className="w-100 h-100 d-flex justify-content-center align-items-center bg-image"
        style={{
          backgroundImage: `url("../../RestPass.jpg")`,
        }}
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

                <Form
                  className="d-flex flex-column align-items-center mx-auto w-100"
                  onSubmit={handleSubmit(Onsubmit)}
                >
                  <MDBInput
                    wrapperClass="mb-3 w-100"
                    labelClass="text-white"
                    label="نام کاربری یا ایمیل"
                    id="formControlLg"
                    type="text"
                    size="lg"
                    {...register("emailORuser")}
                  />
                  <small className="text-danger mb-4">
                    {errors.emailORuser?.message}
                  </small>
                  <MDBBtn
                    outline
                    className="mx-2 px-5 rounded-5"
                    color="light"
                    rippleColor="white"
                    size="lg"
                  >
                    ارسال
                  </MDBBtn>
                </Form>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </>
  );
};

export default PassReset;
