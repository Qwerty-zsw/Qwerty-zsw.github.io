import { Link } from "react-router-dom";
import "./Btn.css";

const Btnz = (props) => {
  return (
    <>
      <Link to={"/CSGO"}>
        <button
          style={{ width: "12.5rem", padding: ".9rem" }}
          className={`btnz text-center text-white cusBtnWidth fw-bold mx-2 rounded-3 ${props.BtnSecClassName}`}
        >
          <section className="mt-1">{props.BtnText}</section>
        </button>
      </Link>
    </>
  );
};
export default Btnz;
