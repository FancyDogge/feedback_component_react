import FeedbackItem from "./FeedbackItem"
import { AnimatePresence, motion } from "framer-motion"
//self-explanatory, chtobi usat' context
import { useContext } from "react"
import FeedbackContext from "../context/FeedbackContext"

function FeedbackList() {
  //можно извлечь все что угодно из FeedbackContext используя useContext hook
  //извлечь мы хотим все тчо находиться в value FeedbackContext.provider (в FeedbackContext.js)
  const {feedback} = useContext(FeedbackContext)

  if (!feedback || feedback.length === 0) {
    return <p>No Feedback Yet.</p>
  }

  return (
      <AnimatePresence>
        {feedback.map((item) => (
          <motion.div
          key={item.id}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          layout
          >
            <FeedbackItem key={item.id} item={item} />
          </motion.div>
          ))}       
      </AnimatePresence>
  )

  // return (
  //   <div className="feedback-list">
  //     {feedback.map((item) => (
  //       <FeedbackItem key={item.id} item={item} handleDelete={handleDelete} />
  //     ))}
  //   </div>
  // )
}

export default FeedbackList