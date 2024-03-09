import { createContext, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
const FeedbackContext = createContext()

export const FeedbackProvider = ({ children }) => {
  const [feedback, setFeedback] = useState([
    { id: 1, text: 'This is feedback item 1', rating: 10 },
    { id: 2, text: 'This is feedback item 2', rating: 7 },
    { id: 13, text: 'This is feedback item 3', rating: 4 },
  ])

  const [feedbackEdit, setFeedbackEdit] = useState({
    item: {},
    edit: false,
  })

  const addFeedback = (newFeedback) => {
    newFeedback.id = uuidv4()
    setFeedback([newFeedback, ...feedback])
  }

  const deleteFeedback = (id) => {
    if (window.confirm('Are you sure you want to delete?')) {
      // return array excluding the item being deleted
      setFeedback(feedback.filter((item) => item.id !== id))
    }
  }

  // Set item to be edited
  const editFeedback = (item) => {
    setFeedbackEdit({
      item,
      edit: true,
    })
  }

  // Update feedback item
  const updateFeedback = (id, updatedItem) => {
    // console.log(id, updatedItem)
    setFeedback(
      feedback.map((item) =>
        item.id === id ? { ...item, ...updatedItem } : item
      )
    )
  }

  return (
    <FeedbackContext.Provider
      value={{
        feedback,
        deleteFeedback,
        addFeedback,
        editFeedback, // edit function
        feedbackEdit, // edit state
        updateFeedback,
      }}
    >
      {children}
      {/* components that need access to context */}
    </FeedbackContext.Provider>
  )
}

export default FeedbackContext
