import React from "react";
import Auth from "../services/Auth";

const LogoutPage = () => {
  Auth.logout();
  window.location.href = "/";

  return null;
};

export default LogoutPage;
