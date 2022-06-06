import { useState } from "react"
 
function FeedbackItem() {
//в этом arr тоже идет destructuring, в данном случае useState'a
// 1 value - имя для стейт value, 2 - ф-ция, для апдейта состояния, обычно называют с как 1 value, но с приставкой set
  const [rating, setRating] = useState(7)
  const [text, setText] = useState('Example of Feedback item')
// для того чтобы изменить стейт, нужно юзать ф-ции set*** в каких-либо евентах
//   const handleClick = () => {
//       setRating(10)
//       setText('Kek, this is your text now')
//   }
// Если нужен доступ к предыдущему значению state, то можно заюзать set***(prevValue), на каждый клик рейтинг будет +1
  const handleClick = () => {
          setRating((prev) => prev + 1)
      }

  return (
    <div className="card">
        <div className="num-display">{rating}</div>
        <div className="texxt-display">{text}</div>
        <button onClick={handleClick}>Click</button>
    </div>
  )
}

export default FeedbackItem