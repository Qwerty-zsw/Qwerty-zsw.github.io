import "./Footer.css";

const Footer = () => {
  return (
    <>
      <div className="w-100 h-cus fw-bold d-flex align-items-center justify-content-center text-center bg-light text-cus flex-row-reverse">
        Made by
        <a
          className="ms-1"
          href="https://github.com/Qwerty-zsw"
          target={"_blank"}
        >
          Qwerty-zsw
        </a>
        💙
      </div>
    </>
  );
};

export default Footer;
