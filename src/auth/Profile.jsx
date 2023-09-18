import { useState, useEffect, useRef } from "react";
import { useAuth, upload, deletePhoto } from "../../cfg/firebase";
import Modal from "react-modal";
import "./Profile.css";

const Profile = (props) => {
  const currentUser = useAuth();
  const [photo, setPhoto] = useState(null);
  const [loading, setLoading] = useState(false);
  const [photoURL, setPhotoURL] = useState();

  const fileInputRef = useRef(null);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  function handleChange(e) {
    if (e.target.files[0]) {
      setPhoto(e.target.files[0]);
    }
  }

  function handleClick() {
    upload(photo, currentUser, setLoading);
    setModalIsOpen(false);
  }

  function handleImageClick() {
    setModalIsOpen(true);
  }

  useEffect(() => {
    if (currentUser?.photoURL) {
      setPhotoURL(currentUser.photoURL);
    }
  }, [currentUser]);

  function handleDeletePhoto() {
    deletePhoto(currentUser);
  }

  return (
    <div className="w-100 h-100 d-flex justify-content-center align-items-center">
      <div className="p-4 rounded-7 blurray-bg">
        <h3 className="text-center">پروفایل کاربری</h3>
        <div
          className="mx-auto"
          style={{ width: "5rem", height: "5rem", objectFit: "cover" }}
          onClick={handleImageClick}
        >
          <img
            className="w-100 h-100 rounded-circle cursor-pointer"
            src={photoURL}
            alt="Avatar"
          />
        </div>
        <p>نام : {props.username}</p>
        <p>ایمیل: {props.email}</p>
        <button onClick={handleDeletePhoto}>حذف عکس</button>
      </div>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
        contentLabel="آپلود عکس"
      >
        <h2>آپلود عکس</h2>
        <input type="file" ref={fileInputRef} onChange={handleChange} />
        <button disabled={loading || !photo} onClick={handleClick}>
          آپلود
        </button>
      </Modal>
    </div>
  );
};

export default Profile;
