import "./Btn.css";

const Btnz = (props) => {
  return (
    <>
      <button
        style={{ width: "12.5rem", padding: ".9rem" }}
        className={`btnz d-felx align-items-center justify-content-center cusBtnWidth fw-bold mx-2 border border-2 rounded-3 ${props.BtnSecClassName}`}
      >
        <section className="mt-1">{props.BtnText}</section>
      </button>
    </>
  );
};
export default Btnz;
