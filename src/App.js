import { useState } from "react"
import { v4 as uuidv4 } from "uuid"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Header from "./components/Header"
import FeedbackList from "./components/FeedbackList"
import FeedbackData from "./data/FeedbackData"
import FeedbackStats from "./components/FeedbackStats"
import FeedbackForm from "./components/FeedbackForm"
import AboutPage from "./pages/AboutPage"
import AboutIconLink from "./components/AboutIconLink"

function App() {
  const [feedback, setFeedback] = useState(FeedbackData)

  // эту ф-цию провели через весь путь сюда, потому что именно тут state, устанавливающий отображаемый feedback\
  //эта рабочая фишка(prop drill), но выглядит запутанно и грязно, позже будет context API
  const deleteFeedback = (id) => {
    if (window.confirm("Are you sure?")) {
      // oh boi
      setFeedback(feedback.filter((item) => item.id !== id))
    }
  }

  const addFeedback = (newFeedback) => {
    newFeedback.id = uuidv4()
    // ...feedback - все что есть в массиве на данный момент + newFeedback
    setFeedback([newFeedback, ...feedback])
  }

  return (
    <Router>
      <Header />
      <div className="container">
        <Routes>
          <Route
            exact
            path="/"
            element={
              <>
                <FeedbackForm handleAdd={addFeedback} />
                {/* определенный стейт передают во все компоненты, где он нужен, чтобы при изменении на странице все менялось без перезагрузки */}
                <FeedbackStats feedback={feedback} />
                <FeedbackList feedback={feedback} handleDelete={deleteFeedback} />
              </>
            }
          ></Route>

          <Route path="/about" element={<AboutPage />} />
        </Routes>
        
        <AboutIconLink />
      </div>
      
    </Router>
  )
}

export default App
