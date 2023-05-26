import "./Read.css";
import Footer from "../Footer/Footer";
import MainHead from "../MainHead/MainHead";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import LoadingPG from "../LoadingPG";

const Read = () => {
  const [loading, setLoading] = useState(true);
  const [GamesData, setGamesData] = useState([]);
  const { pageID } = useParams();

  useEffect(() => {
    setTimeout(() => {
      axios
        .get(
          `https://schh-413d6-default-rtdb.europe-west1.firebasedatabase.app/CardGames/${pageID}.json`
        )
        .then((data) => {
          setGamesData(data.data);
          setLoading(false);
        })
        .catch((err) => {
          console.log(err);
          setLoading(false);
        });
    }, 500);
  }, [pageID]);

  return (
    <>
      {loading ? (
        <LoadingPG loadingText={"درحال بارگیری..."} />
      ) : (
        <>
          <div className="w-100 top-0 position-absolute z-10">
            <MainHead />
          </div>
          <div
            className="w-100 h-75 text-center text-white flex-column bg-image d-flex justify-content-center align-items-center"
            style={{ backgroundImage: `url(${GamesData.readBgImage})` }}
          >
            <div className="position-absolute w-100 h-100 bg-cus"></div>
            <div className="w-100">
              <h1 className="fw-bold txtShadow lh-base px-2 readTitle">
                {GamesData.readBgTitle}
              </h1>
              <h6 className="mt-3 txtShadow text-center fw-bold px-4 lh-base TextInp">
                {GamesData.readUnderTitle}
              </h6>
            </div>
          </div>
          <div className="w-100 text-justify d-flex justify-content-center h-auto bg-custom1 pt-5 pb-5">
            <div className="w-85 mobile-main flex-row-reverse h-100 d-flex mobile-read">
              <div className="w-22 h-100 bg-cust rounded-8 ms-4 text-white mobile-hide">
                <ul className="w-100 py-4">
                  <li className="text-center">{GamesData.readSmallLink}</li>
                  <li className="mt-4 text-center">
                    {GamesData.readSmallLink}
                  </li>
                  <li className="mt-4 text-center">
                    {GamesData.readSmallLink}
                  </li>
                  <li className="mt-4 text-center">
                    {GamesData.readSmallLink}
                  </li>
                  <li className="mt-4 text-center">
                    {GamesData.readSmallLink}
                  </li>
                  <li className="mt-4 text-center">
                    {GamesData.readSmallLink}
                  </li>
                  <li className="mt-4 text-center">
                    {GamesData.readSmallLink}
                  </li>
                  <li className="mt-4 text-center">
                    {GamesData.readSmallLink}
                  </li>
                  <li className="mt-4 text-center">
                    {GamesData.readSmallLink}
                  </li>
                  <li className="mt-4 text-center">
                    {GamesData.readSmallLink}
                  </li>
                  <li className="mt-4 text-center">
                    {GamesData.readSmallLink}
                  </li>
                  <li className="mt-4 text-center">
                    {GamesData.readSmallLink}
                  </li>
                  <li className="mt-4 text-center">
                    {GamesData.readSmallLink}
                  </li>
                  <li className="mt-4 text-center">
                    {GamesData.readSmallLink}
                  </li>
                </ul>
              </div>
              <div className="w-75 main-text h-auto bg-cust rounded-9 me-4 text-white p-5">
                <h3 className="lh-base readTitle2">{GamesData.readTitle}</h3>
                <p className="mt-3">{GamesData.readDescription}</p>
                <h3 className="mt-4 lh-base readTitle2">
                  {GamesData.readTitle}
                </h3>
                <p className="mt-3">{GamesData.readDescription}</p>
                <h3 className="mt-4 lh-base readTitle2">
                  {GamesData.readTitle}
                </h3>
                <p className="mt-3">{GamesData.readDescription}</p>
                <h3 className="mt-4 lh-base readTitle2">
                  {GamesData.readTitle}
                </h3>
                <p className="mt-3">{GamesData.readDescription}</p>
                <h3 className="mt-4 lh-base readTitle2">
                  {GamesData.readTitle}
                </h3>
                <p className="mt-3">{GamesData.readDescription}</p>
              </div>
            </div>
          </div>
          <Footer />
        </>
      )}
    </>
  );
};

export default Read;
