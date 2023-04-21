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

const Signup = () => {
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
  } = useForm({
    resolver: yupResolver(schema),
  });

  const OnSubmit = (data) => {
    console.log(data);
  };

  return (
    <MDBContainer
      fluid
      className="w-100 h-100 d-flex justify-content-center align-items-center bg-image"
      style={{
        backgroundImage: "url(../../public/wzG.jpg)",
      }}
    >
      <MDBCard
        className="bg-blur py-4 px-3 text-muted"
        style={{minWidth:"340px", maxWidth: "600px", borderRadius: "3rem" }}
      >
        <MDBCardBody>
          <h2 className="text-uppercase text-center lh-1">ایجاد حساب کاربری</h2>
          <small className="w-100 d-flex justify-content-center mb-5">به جامعه پرو پلیرا بپیوند!</small>
          <Form
            className="w-100 d-flex flex-column justify-content-center"
            onSubmit={handleSubmit(OnSubmit)}
          >
            <MDBInput
              wrapperClass="mb-1 w-100"
              label="نام کاربری"
              size="lg"
              id="form1"
              type="text"
              {...register("user")}
            />
            <small className="text-danger mb-3">{errors.user?.message}</small>
            <MDBInput
              wrapperClass="mb-1 w-100"
              label="ایمیل"
              size="lg"
              id="form2"
              type="email"
              {...register("email")}
            />
            <small className="text-danger mb-3">{errors.email?.message}</small>
            <MDBInput
              wrapperClass="mb-1 w-100"
              labelClass="text-white"
              label="رمز عبور"
              id="formControlLg"
              size="lg"
              type="password"
              {...register("password")}
            />
            <small className="text-danger mb-3">
              {errors.password?.message}
            </small>
            <MDBInput
              wrapperClass="mb-1 w-100"
              labelClass="text-white"
              label="تکرار رمز عبور"
              id="formControlLg"
              size="lg"
              type="password"
              {...register("confirmPassword")}
            />
            <small className="text-danger mb-4">
              {errors.confirmPassword?.message}
            </small>
            <MDBBtn
              className="mb-4 w-100 gradient-custom-4 text-black"
              size="lg"
            >
              ثبت نام
            </MDBBtn>
          </Form>
        </MDBCardBody>
      </MDBCard>
    </MDBContainer>
  );
};

export default Signup;
