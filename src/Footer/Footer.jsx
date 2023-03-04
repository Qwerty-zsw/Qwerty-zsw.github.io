import "./Footer.css";

const Footer = () => {
  return (
    <>
      <div className="w-100 h-cus fw-bold d-flex align-items-center justify-content-evenly text-center bg-light text-cus flex-row-reverse">
        <section className="text-primary">09037731394</section>
        <section>Made by{" "}
        <a
          href="https://github.com/Qwerty-zsw"
          target={"_blank"}
        >
          Qwerty-zsw
        </a>{" "}💙
        </section>
        <section><a href="http://t.me/Qwerty_zsw" target={"_blank"}>t.me/Qwerty_zsw</a></section>
      </div>
    </>
  );
};

export default Footer;
