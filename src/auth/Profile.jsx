const Profile = (props) => {
  return (
    <div>
      <h2>پروفایل کاربری</h2>
      {props.photoURL}
      <p>نام : {props.username}</p>
      <p>ایمیل: {props.email}</p>
    </div>
  );
}

export default Profile;
