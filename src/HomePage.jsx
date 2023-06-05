import "./HomePage.css";
import { Col } from "react-bootstrap";
import Footer from "./Footer/Footer";
import Main from "./Main/Main";
import MainCard from "./MainCard/MainCard";
import { Link } from "react-router-dom";
import MainHead from "./MainHead/MainHead";
import paraBG from "../public/asd.png";
import LoadingPG from "./LoadingPG";
import FetchData from "./hooks/FetchData";
import { useState } from "react";

const HomePage = () => {
  const [loading, data] = FetchData(
    "https://schh-413d6-default-rtdb.europe-west1.firebasedatabase.app/CardGames.json",
    []
  );
  const [isSearch, setisSearch] = useState("");

  const handelSearch = (q) => {
    setisSearch(q);
  };
  return (
    <div className="w-100 h-100">
      {loading ? (
        <LoadingPG loadingText={"خوش اومدی :)"} />
      ) : (
        <>
          <div className="w-100 top-0 position-absolute z-10">
            <MainHead onSearch={handelSearch} />
          </div>
          <Main
            BtnSecClassName="TransBtn"
            paraFs="fs-60"
            BtnText="WZ 2"
            BtnTextSec="CS:GO"
            ParaText="تلاش برای رسیدن به آخرین سطح"
            paraSmallText="با مسترگیم یه پله از بقیه گیمر ها جلوتر باش!"
            paraSmallFont="font-s"
            bgImg={paraBG}
          />
          <div className="bgc-cus">
            <div className="w-100 minHeight d-flex justify-content-center flex-wrap gap-4 py-5">
              {data
                .filter((val) => {
                  if (isSearch == "") {
                    return val;
                  } else if (
                    val.searchOption
                      .toLowerCase()
                      .includes(isSearch.toLowerCase())
                  ) {
                    return val;
                  }
                })
                .map((item) => {
                  return (
                    <Col
                      className="px-4"
                      xs={12}
                      sm={5}
                      lg={3}
                      key={`Gamedata-${item.id}`}
                    >
                      <Link to={`game/${item.id}`}>
                        <MainCard
                          productImg={item.image}
                          TitleName={item.title}
                          Description={item.Desc}
                        />
                      </Link>
                    </Col>
                  );
                })}
            </div>
          </div>
          <Footer />
        </>
      )}
    </div>
  );
};

export default HomePage;
