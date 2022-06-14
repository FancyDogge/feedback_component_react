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

    const [feedbackEdit, setFeedbackEdit] = useState({
        item: {},
        edit: false
    })

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

    //заапдейтить фидбек пост
    const updateFeedback = (id, newData) => {
        setFeedback(feedback.map((item) => item.id === id ? {...item, ...newData} : item))

        // нужно установить edit на false после апдейта, иначе новый фидбек будет постоянно изменять тот, что отредактировали
        setFeedbackEdit({
            item: {},
            edit: false,
          })
    }

    const editFeedback = (item) => {
        setFeedbackEdit({
            item,
            edit: true,
        })
    }

    return <FeedbackContext.Provider value={{
        //shortcut of feedback: feedback,
        feedback,
        feedbackEdit,
        addFeedback,
        deleteFeedback, 
        editFeedback,
        updateFeedback,
    }}>
        {children}
    </FeedbackContext.Provider>
}

export default FeedbackContext