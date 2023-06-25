import { NavDropdown } from "react-bootstrap";
import "./UserAccordion.css";
import { useState } from "react";
import { signOut } from "firebase/auth";
import { auth } from "../../cfg/firebase";

const UserAccordion = () => {
  const [openHandle, setOpenHandle] = useState(false);

  const logout = async () => {
    try {
      await signOut(auth);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="d-flex justify-content-center position-relative margin-l2">
      <div
        style={{ width: "30px", height: "30px", objectFit: "cover" }}
        className="cursor-pointer"
        onClick={() => setOpenHandle(!openHandle)}
      >
        <img
          className="w-100 h-100 rounded-circle"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRr_VW8rEM8sCasPR53whn3fE-CP7FVn0YPXiBt8eQ&s"
        />
      </div>

      <div
        className={`position-absolute accordions rounded-5 ${
          openHandle ? "" : "d-none"
        }`}
      >
        <NavDropdown.Item
          className="fs-9 fw-bold rounded-5 text-center"
          onClick={() => setOpenHandle(!openHandle)}
          href="#"
        >
          ویرایش
        </NavDropdown.Item>
        <NavDropdown.Item
          className="fs-9 fw-bold rounded-5 text-center"
          onClick={logout}
        >
          خروج
        </NavDropdown.Item>
      </div>
    </div>
  );
};

export default UserAccordion;
