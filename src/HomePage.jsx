import "./HomePage.css";
import { Col } from "react-bootstrap";
import Footer from "./Footer/Footer";
import Main from "./Main/Main";
import MainCard from "./MainCard/MainCard";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const HomePage = () => {
  const [GamesData, setGamesData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3500/CardGames")
      .then((res) => {
        setGamesData(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="w-100 h-100">
      <Main
        BtnSecClassName="TransBtn"
        paraFs="fs-60"
        BtnText="WZ 2"
        BtnTextSec="CS:GO"
        ParaText="تلاش برای رسیدن به آخرین سطح"
        paraSmallText="با مسترگیم یه پله از بقیه گیمر ها جلوتر باش!"
        paraSmallFont="font-s"
        bgImg="../public/asd.png"
      />
      <div className="bgc-cus">
        <div className="w-100 d-flex justify-content-center flex-wrap gap-4 py-5">
          {GamesData.map((item) => {
            return (
              <Col
                className="px-4"
                xs={12}
                sm={5}
                lg={3}
                key={`Gamedata-${item.id}`}
              >
                <Link to={`${item.id}`}>
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
    </div>
  );
};

export default HomePage;
