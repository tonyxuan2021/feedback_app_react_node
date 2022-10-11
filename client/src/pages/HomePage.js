import React from "react";
import FeedbackTicket from "../components/FeedbackTicket";
import HeaderFeedback from "../components/HeaderFeedback";
import HeaderSort from "../components/HeaderSort";

const HomePage = () => {
  return (
    <div>
      <HeaderFeedback />
      <HeaderSort />
      <FeedbackTicket />
    </div>
  );
};

export default HomePage;
