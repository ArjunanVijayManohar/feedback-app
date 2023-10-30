// import { useState } from "react";
import FeedbackStats from "../components/FeedbackStats";
import FeedbackForm from "../components/FeedbackForm";
import FeedbackList from "../components/FeedbackList";
// import { v4 as uuidv4 } from "uuid";
// import FeedbackData from "../data/FeedbackData";

function FeedbackPage() {
  // const [feedback, setFeedback] = useState(FeedbackData);

  return (
    <>
      <FeedbackStats />
      <FeedbackForm />
      <FeedbackList />
    </>
  );
}

export default FeedbackPage;
