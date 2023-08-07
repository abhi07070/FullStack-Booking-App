import React, { useContext } from "react";
import { UserContext } from "../userContext/UserContext";

const AccountPage = () => {
  const { ready, user } = useContext(UserContext);
  return <div></div>;
};

export default AccountPage;
