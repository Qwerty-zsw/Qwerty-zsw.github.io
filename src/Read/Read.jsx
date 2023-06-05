import "./Read.css";
import Footer from "../Footer/Footer";
import MainHead from "../MainHead/MainHead";
import { Link, useNavigate, useParams } from "react-router-dom";
import LoadingPG from "../LoadingPG";
import FetchData from "../hooks/FetchData";
import { useEffect, useState } from "react";
import axios from "axios";

const Read = () => {
  const { pageID } = useParams();
  const navigate = useNavigate();
  const [loading, data] = FetchData(
    `https://schh-413d6-default-rtdb.europe-west1.firebasedatabase.app/CardGames/${pageID}.json`,
    [pageID]
  );

  const [suggest, setSuggest] = useState([]);

  if (!data) {
    navigate("/notfound", { replace: true });
  }

  useEffect(() => {
    axios
      .get(
        "https://schh-413d6-default-rtdb.europe-west1.firebasedatabase.app/Suggest.json"
      )
      .then((res) => setSuggest(res.data));
  }, []);

  return (
    <>
      {loading ? (
        <LoadingPG loadingText={"درحال بارگیری..."} />
      ) : (
        <>
          <div className="w-100 top-0 position-absolute z-10">
            <MainHead searchClass={"d-none"} />
          </div>
          <div
            className="w-100 h-75 text-center text-white flex-column bg-image d-flex justify-content-center align-items-center"
            style={{ backgroundImage: `url(${data.readBgImage})` }}
          >
            <div className="position-absolute w-100 h-100 bg-cus"></div>
            <div className="w-100">
              <h1 className="fw-bold txtShadow lh-base px-2 readTitle">
                {data.readBgTitle}
              </h1>
              <h6 className="mt-3 txtShadow text-center fw-bold px-4 lh-base TextInp">
                {data.readUnderTitle}
              </h6>
            </div>
          </div>
          <div className="w-100 text-justify d-flex justify-content-center h-auto bg-custom1 pt-5 pb-5">
            <div className="w-85 mobile-main flex-row-reverse h-100 d-flex mobile-read">
              <div className="w-22 h-100 bg-cust rounded-8 ms-4 text-white mobile-hide py-4">
                {suggest.map((item) => {
                  return (
                    <Link to={`/game/${item.address}`} className="text-white">
                      <ul className="w-100 py-1">
                        <li className="text-center py-2">
                          {item.readSmallLink}
                        </li>
                      </ul>
                    </Link>
                  );
                })}
              </div>
              <div className="w-75 main-text h-auto bg-cust rounded-9 me-4 text-white p-5">
                <h3 className="lh-base readTitle2">{data.readTitle}</h3>
                <p className="mt-3">{data.readDescription}</p>
                <h3 className="mt-4 lh-base readTitle2">{data.readTitle}</h3>
                <p className="mt-3">{data.readDescription}</p>
                <h3 className="mt-4 lh-base readTitle2">{data.readTitle}</h3>
                <p className="mt-3">{data.readDescription}</p>
                <h3 className="mt-4 lh-base readTitle2">{data.readTitle}</h3>
                <p className="mt-3">{data.readDescription}</p>
                {/* custom */}
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
