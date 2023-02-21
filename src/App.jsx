import "./App.css";
import { Col } from "react-bootstrap";
import Footer from "./Footer/Footer";
import Main from "./Main/Main";
import MainCard from "./MainCard/MainCard";

const App = () => {
  const Data = [
    {
      id: 1,
      image:
        "https://wallpapers.gg/wp-content/uploads/2017/08/Counter-Strike-Global-Offensive-Black-Logo.jpg",
      title: "CS:GO",
      Desc: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ",
    },
    {
      id: 2,
      image:
        "https://w0.peakpx.com/wallpaper/180/943/HD-wallpaper-valorant-logo-valorant-games-2020-games-logo-minimalism-minimalist.jpg",
      title: "Valorant",
      Desc: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ",
    },
    {
      id: 3,
      image:
        "https://wallpapercave.com/dwp1x/wp11644850.jpg",
      title: "Warzone 2",
      Desc: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ",
    },
    {
      id: 4,
      image:
        "https://wallpapercave.com/dwp1x/wp11644850.jpg",
      title: "CS:GO",
      Desc: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ",
    },
    {
      id: 5,
      image:
        "https://wallpapercave.com/dwp1x/wp11644850.jpg",
      title: "CS:GO",
      Desc: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ",
    },
    {
      id: 6,
      image:
        "https://wallpapercave.com/dwp1x/wp11644850.jpg",
      title: "CS:GO",
      Desc: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ",
    },
    {
      id: 7,
      image:
        "https://wallpapercave.com/dwp1x/wp11644850.jpg",
      title: "CS:GO",
      Desc: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ",
    },
    {
      id: 8,
      image:
        "https://wallpapercave.com/dwp1x/wp11644850.jpg",
      title: "CS:GO",
      Desc: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ",
    },
    {
      id: 9,
      image:
        "https://wallpapercave.com/dwp1x/wp11644850.jpg",
      title: "CS:GO",
      Desc: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ",
    },
  ];

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
        height="cus-H"
        bgImg="../public/asd.png"
      />
      <div className="bgc-cus">
        <div className="w-100 d-flex justify-content-center flex-wrap gap-4 py-5">
            {Data.map((item) => {
              return (
                <Col className="px-4" xs={12} sm={5} lg={3}>
                  <a key={`productList-${item.id}`}>
                    <MainCard
                      productImg={item.image}
                      TitleName={item.title}
                      Description={item.Desc}
                    />
                  </a>
                </Col>
              );
            })}
          </div>
        </div>
      <Footer />
    </div>
  );
};

export default App;
