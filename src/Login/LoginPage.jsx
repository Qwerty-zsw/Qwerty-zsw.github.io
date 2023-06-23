import "mdb-react-ui-kit/dist/css/mdb.rtl.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./LoginPage.css";
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
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { Form } from "react-bootstrap";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import loginBG from "../../public/csG.jpg";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../cfg/firebase";
import { ToastContainer, toast } from "react-toastify";
import { useState } from "react";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import VisibilityIcon from "@mui/icons-material/Visibility";

const LoginPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [showPass, isShowPass] = useState(false);

  const schema = yup.object().shape({
    EmailorUser: yup
      .string()
      .required("ایمیل یا نام کاربری خود را وارد کنید!")
      .matches(
        /^(?:(?!.*\s)[a-zA-Z0-9]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+|[a-zA-Z0-9]+)$/,
        "ایمیل یا نام کاربری اشتباه است!"
      ),
    password: yup.string().required("لطفا رمز عبور خود را وارد کنید!"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const signIn = async (data) => {
    try {
      setIsLoading(true);

      await signInWithEmailAndPassword(auth, data.EmailorUser, data.password);
      toast.success("ورود با موفقیت انجام شد", {
        theme: "colored",
      });
    } catch (error) {
      toast.error("مشکل در ورود", {
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
        style={{ backgroundImage: `url(${loginBG})` }}
      >
        <ToastContainer />
        <MDBRow>
          <MDBCol col="12">
            <MDBCard
              className="text-white my-5 mx-auto bg-blur"
              style={{ borderRadius: "3rem", maxWidth: "400px" }}
            >
              <MDBCardBody className="w-100 p-5 d-flex flex-column align-items-center mx-auto">
                <h2 className="fw-bold mb-2 fs-3 text-uppercase user-select-none">
                  ورود
                </h2>
                <p className="text-white-75 mb-5 mt-2 smallCus user-select-none">
                  لطفا نام کاربری و رمزعبور خود را وارد کنید
                </p>

                <Form
                  onSubmit={handleSubmit(signIn)}
                  className="w-100 text-center"
                >
                  <MDBInput
                    wrapperClass="mb-1 w-100 qqqq"
                    labelClass="text-white TextInp"
                    label="نام کاربری یا ایمیل"
                    id="formControlLg"
                    type="text"
                    size="lg"
                    {...register("EmailorUser")}
                  />
                  <small className="text-danger TextInp">
                    <section className="w-100 d-flex mt-1 text-danger">
                      {errors.EmailorUser?.message}
                    </section>
                  </small>
                  <div className="position-relative">
                    <MDBInput
                      wrapperClass="mt-3 w-100 TextInp"
                      labelClass="text-white"
                      label="رمز عبور"
                      id="formControlLg"
                      size="lg"
                      type={showPass ? "text" : "password"}
                      {...register("password")}
                    />
                    <MDBBtn
                      tag="a"
                      color="none"
                      className="d-flex align-items-center px-3 position-absolute showPass"
                      style={{ color: "rgba(185, 185, 185)" }}
                      onClick={() => isShowPass(!showPass)}
                    >
                      {showPass ? <VisibilityIcon /> : <VisibilityOffIcon />}
                    </MDBBtn>
                  </div>
                  <small className="w-100 TextInp">
                    <section className="w-100 d-flex mt-1 text-danger">
                      {errors.password?.message}
                    </section>
                  </small>
                  <MDBBtn
                    outline
                    className="mx-2 mt-3 px-5 rounded-5 TextInp"
                    color="light"
                    rippleColor="white"
                    size="lg"
                    disabled={isLoading}
                  >
                    {isLoading ? "در حال ورود..." : "ورود"}
                  </MDBBtn>
                </Form>

                <Link to={"/ریست-پسورد"} className="small mt-3 pb-lg-2">
                  <a href="#">پسورد خود را فراموش کرده اید؟</a>
                </Link>

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
                  <p className="mb-0 user-select-none">
                    حساب کاربری ندارید؟{" "}
                    <LinkContainer to={"/ثبت-نام"}>
                      <a className="fw-bold">ثبت نام</a>
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
