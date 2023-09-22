import { Nav, NavDropdown } from "react-bootstrap";
import { useEffect, useState } from "react";
import { signOut } from "firebase/auth";
import { auth, useAuth } from "../../cfg/firebase";
import defaultAvatar from "../../public/defaultAvatar.png";
import "./UserAccordion.css";

const UserAccordion = () => {
  const currentUser = useAuth();
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
    <div className="d-flex align-items-center justify-content-center position-relative">
      <Nav className="accordions rounded-5">
        <NavDropdown
          className="text-center d-flex align-items-center"
          title={
            <div
              style={{ width: "2.5rem", height: "2.5rem", objectFit: "cover" }}
              className="cursor-pointer asdqwe"
            >
              <img
                className="w-100 h-100 rounded-circle"
                src={photoURL}
                alt="Avatar"
              />
            </div>
          }
          id="navbarScrollingDropdown"
        >
          <NavDropdown.Item
            className="fs-9 fw-bold rounded-5 text-center"
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
        </NavDropdown>
      </Nav>
    </div>
  );
};

export default UserAccordion;
