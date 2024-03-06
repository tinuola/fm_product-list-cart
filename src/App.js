import { useState } from 'react'
import FeedbackForm from './components/FeedbackForm'
import FeedbackList from './components/FeedbackList'
import FeedbackStats from './components/FeedbackStats'
import Header from './components/Header'
import FeedbackData from './data/FeedbackData'

function App() {
  const [feedback, setFeedback] = useState(FeedbackData)

  const deleteFeedback = (id) => {
    if (window.confirm('Are you sure you want to delete?')) {
      // return array excluding the item being deleted
      setFeedback(feedback.filter((item) => item.id !== id))
    }
  }

  const addFeedback = (newFeedback) => {
    console.log(newFeedback)
  }

  return (
    <>
      <Header />
      <div className='container'>
        <FeedbackForm handleAdd={addFeedback} />
        <FeedbackStats feedback={feedback} />
        <FeedbackList
          feedback={feedback}
          handleDelete={deleteFeedback}
        />
      </div>
    </>
  )
}

export default App
