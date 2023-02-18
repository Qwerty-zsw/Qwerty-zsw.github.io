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
      <div className="w-100 d-flex justify-content-evenly flex-wrap overflow-hidden gap-2 mt-5">
        {Data.map((item) => {
          return (
            <a key={`productList-${item.id}`}>
              <MainCard
                productImg={item.image}
                TitleName={item.title}
                Description={item.Desc}
              />
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default App;
