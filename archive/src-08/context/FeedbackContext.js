import { createContext, useState, useEffect } from 'react'
// import { v4 as uuidv4 } from 'uuid'
const FeedbackContext = createContext()

export const FeedbackProvider = ({ children }) => {
  // const [feedback, setFeedback] = useState([
  //   { id: 1, text: 'This is feedback item 1', rating: 10 },
  //   { id: 2, text: 'This is feedback item 2', rating: 7 },
  //   { id: 13, text: 'This is feedback item 3', rating: 4 },
  // ])

  const [isLoading, setIsLoading] = useState(true)
  const [feedback, setFeedback] = useState([])

  const [feedbackEdit, setFeedbackEdit] = useState({
    item: {},
    edit: false,
  })

  useEffect(() => {
    fetchFeedback()
  }, [])

  // Fetch Feedback
  const fetchFeedback = async () => {
    // const response = await fetch('http://localhost:5002/feedback')
    // Proxy version:
    const response = await fetch('/feedback')
    const data = await response.json()
    setFeedback(data)

    setIsLoading(false)
  }

  const addFeedback = async (newFeedback) => {
    const response = await fetch('/feedback', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newFeedback),
    })

    const data = await response.json()

    // newFeedback.id = uuidv4()
    setFeedback([data, ...feedback])
  }

  const deleteFeedback = async (id) => {
    if (window.confirm('Are you sure you want to delete?')) {
      await fetch(`/feedback/${id}`, {
        method: 'DELETE',
      })

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
  const updateFeedback = async (id, updatedItem) => {
    // console.log(id, updatedItem)

    const response = await fetch(`/feedback/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedItem),
    })

    const data = await response.json()

    setFeedback(
      feedback.map((item) => (item.id === id ? { ...item, ...data } : item))
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
        isLoading,
      }}
    >
      {children}
      {/* components that need access to context */}
    </FeedbackContext.Provider>
  )
}

export default FeedbackContext
