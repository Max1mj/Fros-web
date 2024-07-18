import React from "react";
import { useLocation } from "react-router-dom";

const PageText = () => {
  const location = useLocation();
  // need to change below(now its test feature)
  let text;
  switch (location.pathname) {
    case "/":
      text = "Welcome!";
      break;
    case "/profile":
      text = "Profile Page";
      break;
    case "/settings":
      text = "Settings";
      break;
    case "/achievements":
      text = "Achievements";
      break;
  }

  return <div className="text-white text-xl font-mono">{text}</div>;
};

export default PageText;
