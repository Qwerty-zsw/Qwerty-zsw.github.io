import Btnz from "../Button/Btn";
import MainHead from "../MainHead/MainHead";
import "./Main.css";

const Main = ({
  bgImg,
  height,
  paraFs,
  ParaText,
  paraSmallFont,
  paraSmallText,
  BtnText,
  BtnClassMain,
  BtnSecClassName,
  BtnTextSec,
}) => {
  return (
    <div
      style={{ backgroundImage: `url(${bgImg})` }}
      className={`w-100 ${height} position-relative parallax-window shadow-lg`}
    >
      <div className="position-absolute w-100 h-100 bg-cus"></div>
      <div className="w-100 h-100 d-flex position-absolute justify-content-center align-items-center">
        <div className="w-100 top-0 position-absolute">
          <MainHead />
        </div>
        <div className="w-100 d-flex flex-column text-center text-white">
          <section className={`w-100 ${paraFs}`}>{ParaText}</section>
          <div className="w-100 d-flex justify-content-center">
            <small className={`${paraSmallFont} mt-3 mb-2`}>
              {paraSmallText}
            </small>
          </div>
          <div
            className="w-100 d-flex justify-content-center mt-4"
          >
            <Btnz BtnText={BtnText} BtnSecClassName={BtnClassMain} />
            <Btnz BtnSecClassName={BtnSecClassName} BtnText={BtnTextSec} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
