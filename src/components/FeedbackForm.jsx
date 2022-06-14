import { useState, useContext, useEffect } from "react"
import FeedbackContext from "../context/FeedbackContext"
import Card from "./shared/Card"
import Button from "./shared/Button"
import RatingSelect from "./RatingSelect"

function FeedbackForm() {
  // разные состояния для разных компонентов/их частей
  const [text, setText] = useState("")
  const [btnDisabled, setBtnDisabled] = useState(true)
  const [message, setMessage] = useState("")
  const [rating, setRating] = useState(10)

  //feedback context
  const {addFeedback, feedbackEdit, updateFeedback} = useContext(FeedbackContext)

  //1 - callback, 2 -лист зависимостей, если пуст, то useeffect срабатывает при загрузке компонента, если есть объект, то когда он меняется, useeff срабатывает
  useEffect(() => {
    if (feedbackEdit.edit === true) {
      setBtnDisabled(false)
      setText(feedbackEdit.item.text)
      setRating(feedbackEdit.item.rating)
    }
  }, [feedbackEdit])

  // логика стейтов
  const handleTextChange = (e) => {
    if (text === "") {
      setBtnDisabled(true)
      setMessage(null)
    } else if (text !== "" && text.trim().length < 10) {
      setBtnDisabled(true)
      setMessage("Text must be at least 10 characters");
    } else {
      setBtnDisabled(false)
      setMessage(null)
    }

    setText(e.target.value)
  }


  const handleSubmit = (e) => {
    e.preventDefault()
    //чтобы нелья было через devtools активировать submit button
    if(text.trim().length >= 10){
      const newFeedback = {
        //shortcut text: text
        text,
        rating,
      }
      // напоминалка: edit меняется на тру после клика на иконку "изменить"
      if(feedbackEdit.edit === true) {
        updateFeedback(feedbackEdit.item.id, newFeedback)
      } else {
        addFeedback(newFeedback)
      }

      setText('')
    }
  }

  return (
    <Card>
      <form onSubmit={handleSubmit}>
        <h2>How would you rate our servise?</h2>
        <RatingSelect select={setRating} selected={rating} />
        <div className="input-group">
          <input
            onChange={handleTextChange}
            type="text"
            placeholder="Wrate a review"
            value={text}
          />
          <Button type="submit" isDisabled={btnDisabled}>
            Send
          </Button>
        </div>
        {/* если есть месседж, то отобразить его */}
        {message && <div className="message">{message}</div>}
      </form>
    </Card>
  );
}

export default FeedbackForm
