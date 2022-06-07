import FeedbackItem from "./FeedbackItem"
import PropTypes from "prop-types"
import { AnimatePresence, motion } from "framer-motion"

function FeedbackList({ feedback, handleDelete }) {
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
            <FeedbackItem key={item.id} item={item} handleDelete={handleDelete} />
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

FeedbackList.propTypes = {
  // можно даже указать из чего состоит массив
  feedback: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      text: PropTypes.string.isRequired,
      rating: PropTypes.number.isRequired,
    })
  ),
}

export default FeedbackList