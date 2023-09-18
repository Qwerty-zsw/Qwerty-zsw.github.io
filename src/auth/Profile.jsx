import { useState, useEffect, useRef } from "react";
import { useAuth, upload, deletePhoto } from "../../cfg/firebase";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import "./Profile.css";
import { ToastContainer } from "react-toastify";

const Profile = (props) => {
  const currentUser = useAuth();
  const [, setLoading] = useState(false);
  const [photoURL, setPhotoURL] = useState();

  const fileInputRef = useRef(null);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  function handleChange(e) {
    if (e.target.files[0]) {
      upload(e.target.files[0], currentUser, setLoading, setPhotoURL);
      setModalIsOpen(false);
    }
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

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };

  return (
    <div className="w-100 h-100 d-flex justify-content-center align-items-center">
      <ToastContainer />
      <div className="p-4 rounded-7 blurray-bg">
        <h3 className="text-center">پروفایل کاربری</h3>
        <div
          className="mx-auto cursor-pointer"
          style={{ width: "5rem", height: "5rem", objectFit: "cover" }}
          onClick={handleImageClick}
        >
          <img
            className="w-100 h-100 rounded-circle"
            src={photoURL}
            alt="Avatar"
          />
        </div>
        <p>نام : {props.username}</p>
        <p>ایمیل: {props.email}</p>
      </div>
      <Modal open={modalIsOpen} onClose={() => setModalIsOpen(false)}>
        <Box className="px-3 rounded-8 boxStlye" sx={style}>
          <h3 className="text-center text-white">تغییر عکس</h3>
          <label className="uploadStyle cursor-pointer" htmlFor="wewe">
            آپلود عکس
          </label>
          <input
            id="wewe"
            className="d-none"
            type="file"
            ref={fileInputRef}
            onChange={handleChange}
          />
          <button className="asdasd" onClick={handleDeletePhoto}>
            حذف عکس
          </button>
        </Box>
      </Modal>
    </div>
  );
};

export default Profile;
