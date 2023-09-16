import { useState, useEffect } from "react";
import Profile from "./Profile";
import { auth } from "../../cfg/firebase";
import { useNavigate } from "react-router-dom";

function ProfileDisplay() {
  const [user, setUser] = useState(null);
  const navigate = useNavigate()

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
        navigate("/ورود")
      }
    });

    return () => unsubscribe();
  }, []);

  return (
    <div>
      {user ? (
        <Profile username={user.username} email={user.email} photo={user.photoURL} />
      ) : (
        null
      )}
    </div>
  );
}

export default ProfileDisplay;
