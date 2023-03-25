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
import {yupResolver} from "@hookform/resolvers/yup"
import * as yup from "yup";

const Signup = () => {

  const schema = yup.object().shape({
    user: yup.string().min(4).max(16).required(),
    email: yup.string().email().required(),
    password: yup.string().min(6).max(20).required(),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password"), null])
      .required(),
  });

  const { register, handleSubmit } = useForm({
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
        className="bg-blur py-4 px-1 text-muted"
        style={{ maxWidth: "600px", borderRadius: "3rem" }}
      >
        <MDBCardBody className="px-5">
          <h2 className="text-uppercase text-center mb-5">ایجاد حساب کاربری</h2>
          <Form
            className="w-100 d-flex flex-column justify-content-center"
            onSubmit={handleSubmit(OnSubmit)}
          >
            <MDBInput
              wrapperClass="mb-4"
              label="نام کاربری"
              size="lg"
              id="form1"
              type="text"
              {...register("user")}
            />
            <MDBInput
              wrapperClass="mb-4"
              label="ایمیل"
              size="lg"
              id="form2"
              type="email"
              {...register("email")}
            />
            <MDBInput
              wrapperClass="mb-4 w-100"
              labelClass="text-white"
              label="رمز عبور"
              id="formControlLg"
              size="lg"
              type="password"
              {...register("password")}
            />
            <MDBInput
              wrapperClass="mb-4 w-100"
              labelClass="text-white"
              label="تکرار رمز عبور"
              id="formControlLg"
              size="lg"
              type="password"
              {...register("confirmPassword")}
            />

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
