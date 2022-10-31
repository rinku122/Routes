import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useOutletContext } from "react-router-dom";

const Profile = () => {
  const ans = useOutletContext();

  console.log(ans, "Profile");
  const navigate = useNavigate();
  const { username } = useParams();
  return (
    <div>
      Profile : {username}
      <button onClick={() => navigate("/about")}>Go to about page</button>{" "}
      <button onClick={() => navigate(-1)}>Go back</button>{" "}
    </div>
  );
};

export default Profile;
