import { useState } from "react";
import Header from "./components/Header";
import FeedbackList from "./components/FeedbackList";
import FeedbackData from "./data/FeedbackData";

function App() {
  const [feedback, setFeedback] = useState(FeedbackData);

  // эту ф-цию провели через весь путь сюда, потому что именно тут state, устанавливающий отображаемый feedback\
  //эта рабочая фишка(prop drill), но выглядит запутанно и грязно, позже будет context API
  const deleteFeedback = (id) => {
    if (window.confirm("Are you sure?")) {
      // oh boi
      setFeedback(feedback.filter((item) => item.id !== id));
    }
  };

  return (
    <>
      <Header />
      <div className="container">
        <FeedbackList feedback={feedback} handleDelete={deleteFeedback} />
      </div>
    </>
  );
}

export default App;
