import React from "react";

const UserProfile = ({ username }) => {
  return (
    <div>
      <h2>user profile</h2>
      {username} is on live
    </div>
  );
};

export default UserProfile;

export async function getServerSideProps() {
  return {
    props: {
      username: "david",
    },
  };
}
