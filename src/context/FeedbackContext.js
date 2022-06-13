import { createContext, useState } from "react"
import { v4 as uuidv4 } from "uuid"

//context
const FeedbackContext = createContext()

//это враппер(Provider), который как route будет родителем всех apps (children), а value = все стейты, ф-циии, в общем props, которые передаются children
export const FeedbackProvider = ({children}) => {
    const [feedback, setFeedback] = useState([
        {
            id: 1,
            text: 'This is from context',
            rating: 10
        }
    ])

    const addFeedback = (newFeedback) => {
        newFeedback.id = uuidv4()
        // ...feedback - все что есть в массиве на данный момент + newFeedback
        setFeedback([newFeedback, ...feedback])
    }

    const deleteFeedback = (id) => {
        if (window.confirm("Are you sure?")) {
          // oh boi
          setFeedback(feedback.filter((item) => item.id !== id))
        }
    }

    return <FeedbackContext.Provider value={{
        //shortcut of feedback: feedback,
        feedback,
        addFeedback,
        deleteFeedback, 
    }}>
        {children}
    </FeedbackContext.Provider>
}

export default FeedbackContext