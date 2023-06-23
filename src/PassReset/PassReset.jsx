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
import ResetPassBG from "../../public/ResetPass.jpg";
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "../../cfg/firebase";
import { ToastContainer, toast } from "react-toastify";
import { useState } from "react";

const PassReset = () => {
  const [IsLoading, setIsLoading] = useState(false);
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

  const onSubmit = async (data) => {
    setIsLoading(true);
    try {
      await sendPasswordResetEmail(auth, data.emailORuser);
      toast.success("لطفا ایمیل خود را چک کنید", {
        theme: "colored",
      });
    } catch (error) {
      toast.error("ایمیل یا نام‌کاربری وجود ندارد", {
        theme: "colored",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <MDBContainer
        fluid
        className="w-100 h-100 d-flex justify-content-center align-items-center bg-image"
        style={{
          backgroundImage: `url(${ResetPassBG})`,
        }}
      >
        <ToastContainer />
        <MDBRow className="w-100">
          <MDBCol col="12">
            <MDBCard
              className="text-white mx-auto bg-blur"
              style={{ borderRadius: "3rem", maxWidth: "600px" }}
            >
              <MDBCardBody className="px-5 d-flex flex-column align-items-center w-100">
                <h2 className="fw-bold mb-2 fs-3 text-uppercase text-sizeCus">
                  ریست پسورد
                </h2>
                <p className="text-white-75 mb-5 mt-2 smallCus">
                  یوزر یا ایمیل خود را وارد کنید.
                </p>

                <Form
                  className="d-flex flex-column align-items-center w-100"
                  onSubmit={handleSubmit(onSubmit)}
                >
                  <MDBInput
                    wrapperClass="mb-3 w-100"
                    labelClass="text-white TextInp"
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
                    className="mx-2 px-5 rounded-5 TextInp"
                    color="light"
                    rippleColor="white"
                    size="lg"
                    disabled={IsLoading}
                  >
                    {IsLoading ? "درحال ارسال..." : "ارسال"}
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
