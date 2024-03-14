import { createContext, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
const FeedbackContext = createContext()

export const FeedbackProvider = ({ children }) => {
  const [feedback, setFeedback] = useState([
    { id: 1, text: 'This is feedback item 1', rating: 10 },
    { id: 2, text: 'This is feedback item 2', rating: 7 },
    { id: 13, text: 'This is feedback item 3', rating: 4 },
  ])

  const deleteFeedback = (id) => {
    if (window.confirm('Are you sure you want to delete?')) {
      // return array excluding the item being deleted
      setFeedback(feedback.filter((item) => item.id !== id))
    }
  }

  const addFeedback = (newFeedback) => {
    newFeedback.id = uuidv4()
    // console.log(newFeedback)
    setFeedback([newFeedback, ...feedback])
  }

  return (
    <FeedbackContext.Provider value={{ feedback, deleteFeedback, addFeedback }}>
      {children}

      {/* components that need access to context */}
    </FeedbackContext.Provider>
  )
}

export default FeedbackContext
