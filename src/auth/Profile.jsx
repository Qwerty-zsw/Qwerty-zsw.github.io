import { useState, useEffect } from "react";
import { useAuth, upload } from "../../cfg/firebase";

const Profile = (props) => {
  const currentUser = useAuth();
  const [photo, setPhoto] = useState(null);
  const [loading, setLoading] = useState(false);
  const [photoURL, setPhotoURL] = useState(
    "https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png"
  );

  function handleChange(e) {
    if (e.target.files[0]) {
      setPhoto(e.target.files[0]);
    }
  }

  function handleClick() {
    upload(photo, currentUser, setLoading);
  }

  useEffect(() => {
    if (currentUser?.photoURL) {
      setPhotoURL(currentUser.photoURL);
    }
  }, [currentUser]);
  return (
    <div className="w-100 h-100 d-flex justify-content-center align-items-center">
      <div>
        <h2 className="text-center">پروفایل کاربری</h2>
        <div
          className="mx-auto"
          style={{ width: "5rem", height: "5rem", objectFit: "cover" }}
          onClick={() => setOpenHandle(!openHandle)}
        >
          <img
            className="w-100 h-100 rounded-circle"
            src={photoURL}
            alt="Avatar"
          />
        </div>
        <p>نام : {props.username}</p>
        <p>ایمیل: {props.email}</p>

        <div className="fields">
          <input type="file" onChange={handleChange} />
          <button disabled={loading || !photo} onClick={handleClick}>
            آپلود
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
