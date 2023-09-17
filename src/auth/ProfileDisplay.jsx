import { useState, useEffect } from "react";
import Profile from "./Profile";
import { auth } from "../../cfg/firebase";
import { useNavigate } from "react-router-dom";
import PS5ui from "../../public/PS5ui.png";

function ProfileDisplay() {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
        navigate("/ورود");
      }
    });

    return () => unsubscribe();
  }, []);

  return (
    <div style={{ backgroundImage: `url(${PS5ui})` }} className="w-100 h-100 d-flex">
      {user ? <Profile email={user.email} /> : null}
    </div>
  );
}

export default ProfileDisplay;
