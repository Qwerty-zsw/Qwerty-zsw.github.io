import "./Signup.css";
import {
  MDBBtn,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBInput,
} from "mdb-react-ui-kit";
import { Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import signupBG from "../../public/wzG.jpg";
import { ToastContainer, toast } from "react-toastify";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../cfg/firebase";
import { useState } from "react";
import { Checkbox, FormControlLabel } from "@mui/material";

const Signup = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const schema = yup.object().shape({
    user: yup
      .string()
      .required("لطفا نام کاربری را وارد کنید!")
      .min(4, "تعداد حروف کمتر از 4 کلمه است!")
      .max(16, "تعداد حروف بیشتر از 16 کلمه است!"),
    email: yup
      .string()
      .email("ایمیل اشتباه است!")
      .required("لطفا ایمیل را وارد کنید!"),
    password: yup
      .string()
      .required("لطفا رمز عبور خود را وارد کنید!")
      .min(6, "تعداد حروف کمتر از 6 کلمه است!")
      .max(20, "تعداد حروف بیشتر از 20 کلمه است!")
      .matches(/^(?=.*[A-Z])/, "لطفا یک حرف بزرگ در پسورد خود باشد!")
      .matches(/^(?=.*[0-9])/, "لطفا در پسورد خود عدد اضافه کنید!"),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password"), null], "پسورد مطابقت ندارد!")
      .required("لطفا رمز عبور خود را دوباره وارد کنید!"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm({
    resolver: yupResolver(schema),
  });
  const signUp = async (formData) => {
    try {
      setIsLoading(true);

      await createUserWithEmailAndPassword(
        auth,
        formData.email,
        formData.password,
        formData.confirmPassword
      );

      toast.success("ثبت نام با موفقیت انجام شد", {
        theme: "colored",
      });
    } catch (err) {
      if (err.code === "auth/email-already-in-use") {
        setError("email", {
          type: "manual",
          message: "این ایمیل قبلاً ثبت شده است!",
        });
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <MDBContainer
      fluid
      className="w-100 h-100 d-flex justify-content-center align-items-center bg-image"
      style={{
        backgroundImage: `url(${signupBG})`,
      }}
    >
      <MDBCard
        className="bg-blur py-4 px-4"
        style={{ minWidth: "400px", maxWidth: "600px", borderRadius: "3rem" }}
      >
        <MDBCardBody>
          <h2 className="text-uppercase fs-4 text-center lh-1 text-sizeCus user-select-none">
            ایجاد حساب کاربری
          </h2>
          <small className="w-100 d-flex justify-content-center mb-5 smallCus user-select-none">
            به جامعه پرو پلیرا بپیوند!
          </small>
          <Form
            className="w-100 d-flex flex-column justify-content-center"
            onSubmit={handleSubmit(signUp)}
          >
            <MDBInput
              wrapperClass="mb-1 w-100 TextInp"
              label="نام کاربری"
              size="lg"
              id="form1"
              type="text"
              {...register("user")}
            />
            <small className="text-danger mb-3 TextInp">
              {errors.user?.message}
            </small>
            <MDBInput
              wrapperClass="mb-1 w-100 TextInp"
              label="ایمیل"
              size="lg"
              id="form2"
              type="email"
              {...register("email")}
            />
            <small className="text-danger mb-3 TextInp">
              {errors.email?.message}
            </small>
            <MDBInput
              wrapperClass="mb-1 w-100 TextInp"
              labelClass="text-white"
              label="رمز عبور"
              id="formControlLg"
              size="lg"
              type={showPassword ? "text" : "password"}
              {...register("password")}
            />
            <small className="text-danger mb-3 TextInp">
              {errors.password?.message}
            </small>
            <MDBInput
              wrapperClass="mb-1 w-100 TextInp"
              labelClass="text-white"
              label="تکرار رمز عبور"
              id="formControlLg2"
              size="lg"
              type={showPassword ? "text" : "password"}
              {...register("confirmPassword")}
            />
            <small className="text-danger mb-4 TextInp">
              {errors.confirmPassword?.message}
            </small>
            <div className="mb-4">
              <FormControlLabel
                className="user-select-none"
                control={
                  <Checkbox
                    onClick={() => setShowPassword(!showPassword)}
                    sx={{
                      color: "rgb(180, 180, 180)",
                    }}
                  />
                }
                label="نمایش رمز عبور"
              />
            </div>
            <MDBBtn
              className="mb-4 w-100 gradient-custom-4 text-black TextInp"
              size="lg"
              disabled={isLoading}
            >
              {isLoading ? "در حال ثبت نام..." : "ثبت نام"}
            </MDBBtn>
          </Form>
        </MDBCardBody>
      </MDBCard>
      <ToastContainer />
    </MDBContainer>
  );
};

export default Signup;
