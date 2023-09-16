import { onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import { auth } from "../../cfg/firebase";
import { LinkContainer } from "react-router-bootstrap";
import Nav from "react-bootstrap/Nav";
import UserAccordion from "./UserAccordion";
import "./AuthDetails.css";

const AuthDetails = () => {
  const [authUser, setAuthUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setAuthUser(user);
      } else {
        setAuthUser(null);
      }
    });

    return () => unsubscribe();
  }, []);

  return (
    <div className="w-100 h-100">
      {authUser ? (
        <div className="marginRight22">
          <UserAccordion user={authUser} />
        </div>
      ) : (
        <LinkContainer to="/ورود">
          <Nav.Link className="login100 bg-white text-black fw-bold cusLog">
            ورود
          </Nav.Link>
        </LinkContainer>
      )}
    </div>
  );
};

export default AuthDetails;
