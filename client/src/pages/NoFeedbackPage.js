import React from "react";
import HeaderFeedback from "../components/HeaderFeedback";
import HeaderSort from "../components/HeaderSort";
import detective from "../assets/image/mobile/illustration-empty.svg";

const NoFeedbackPage = () => {
  return (
    <div>
      <HeaderFeedback />
      <HeaderSort />
      <div>
        <img src={detective}></img>
      </div>
    </div>
  );
};

export default NoFeedbackPage;
