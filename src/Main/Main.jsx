import Btnz from "../Button/Btn";
import MainHead from "../MainHead/MainHead";
import "./Main.css";

const Main = ({
  bgImg,
  height,
  paraFs,
  ParaText,
  paraSecWidth,
  paraSmallFont,
  paraSmallText,
  paraBtnVisibility,
  BtnText,
  BtnClassMain,
  BtnSecClassName,
  BtnTextSec,
}) => {
  return (
    <div
      style={{ backgroundImage: `url(${bgImg})` }}
      className={`w-100 ${height} position-relative parallax-window`}
    >
      <div className="w-100 h-100 d-flex position-absolute justify-content-center align-items-center">
        <div className="w-100 top-0 position-absolute">
          <MainHead />
        </div>
        <div className="w-100 d-flex flex-column text-center">
          <section className={`w-100 ${paraFs}`}>{ParaText}</section>
          <div className="w-100 d-flex justify-content-center">
            <small className={`${paraSecWidth} ${paraSmallFont} mt-3 mb-2`}>
              {paraSmallText}
            </small>
          </div>
          <div
            className={`w-100 d-flex justify-content-center mt-4 ${paraBtnVisibility}`}
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
