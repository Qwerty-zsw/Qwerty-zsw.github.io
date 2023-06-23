import "./Footer.css";
import TelegramIcon from "@mui/icons-material/Telegram";
import CallIcon from "@mui/icons-material/Call";

const Footer = () => {
  return (
    <>
      <div className="w-100 h-cus mobile-cus fw-bold d-flex align-items-center justify-content-evenly text-center bg-light text-cus">
        <section className="text-primary">
          <CallIcon className="fs-5 text-white" /> 09037731394
        </section>
        <section className="user-select-none my-2">
          Made by{" "}
          <a href="https://github.com/Qwerty-zsw" target={"_blank"}>
            Qwerty-zsw
          </a>{" "}
          💙
        </section>
        <section>
          <a href="http://t.me/Qwerty_zsw" target={"_blank"}>
            <TelegramIcon className="text-blue" /> Qwerty_zsw
          </a>
        </section>
      </div>
    </>
  );
};

export default Footer;
