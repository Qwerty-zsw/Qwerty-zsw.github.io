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
        "https://media.steampowered.com/apps/csgo/blog/images/fb_image.png",
      title: "CS:GO",
      Desc: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ",
    },
    {
      id: 2,
      image:
        "https://media.steampowered.com/apps/csgo/blog/images/fb_image.png",
      title: "CS:GO",
      Desc: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ",
    },
    {
      id: 3,
      image:
        "https://media.steampowered.com/apps/csgo/blog/images/fb_image.png",
      title: "CS:GO",
      Desc: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ",
    },
    {
      id: 4,
      image:
        "https://media.steampowered.com/apps/csgo/blog/images/fb_image.png",
      title: "CS:GO",
      Desc: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ",
    },
    {
      id: 5,
      image:
        "https://media.steampowered.com/apps/csgo/blog/images/fb_image.png",
      title: "CS:GO",
      Desc: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ",
    },
    {
      id: 6,
      image:
        "https://media.steampowered.com/apps/csgo/blog/images/fb_image.png",
      title: "CS:GO",
      Desc: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ",
    },
    {
      id: 7,
      image:
        "https://media.steampowered.com/apps/csgo/blog/images/fb_image.png",
      title: "CS:GO",
      Desc: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ",
    },
    {
      id: 8,
      image:
        "https://media.steampowered.com/apps/csgo/blog/images/fb_image.png",
      title: "CS:GO",
      Desc: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ",
    },
    {
      id: 9,
      image:
        "https://media.steampowered.com/apps/csgo/blog/images/fb_image.png",
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
