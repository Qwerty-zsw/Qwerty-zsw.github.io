import { NavDropdown } from "react-bootstrap";
import { useEffect, useState } from "react";
import { signOut } from "firebase/auth";
import { auth, useAuth } from "../../cfg/firebase";
import defaultAvatar from "../../public/defaultAvatar.png";
import "./UserAccordion.css";

const UserAccordion = () => {
  const currentUser = useAuth();
  const [openHandle, setOpenHandle] = useState(false);
  const [photoURL, setPhotoURL] = useState(defaultAvatar);

  const logout = async () => {
    try {
      await signOut(auth);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    if (currentUser?.photoURL) {
      setPhotoURL(currentUser.photoURL);
    }
  }, [currentUser]);

  return (
    <div className="d-flex justify-content-center position-relative margin-l2">
      <div
        style={{ width: "30px", height: "30px", objectFit: "cover" }}
        className="cursor-pointer"
        onClick={() => setOpenHandle(!openHandle)}
      >
        <img
          className="w-100 h-100 rounded-circle"
          src={photoURL}
          alt="Avatar"
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
          href="/profile"
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
