import React, { useState } from "react";
import FeedbackTicket from "../components/FeedbackTicket";
import HeaderFeedback from "../components/HeaderFeedback";
import HeaderSort from "../components/HeaderSort";
import data from "../data/data.json";

const HomePage = () => {
  const [feedbackData, setFeedbackData] = useState(data);

  return (
    <div>
      <HeaderFeedback />
      <HeaderSort />
      <FeedbackTicket feedbackData={feedbackData} />
    </div>
  );
};

export default HomePage;
