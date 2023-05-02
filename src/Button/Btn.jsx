import "./Btn.css";

const Btnz = (props) => {
  return (
    <>
      <button
        style={{ width: "12.5rem", padding: ".9rem" }}
        className={`btnz text-center text-white cusBtnWidth fw-bold mx-2 rounded-3 BtnSizeMobile ${props.BtnSecClassName}`}
      >
        <section className="mt-1">{props.BtnText}</section>
      </button>
    </>
  );
};
export default Btnz;
