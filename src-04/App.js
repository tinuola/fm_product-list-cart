// Prop drilling
// Adding icon and deleting item from feedback list

import { useState } from 'react'
import FeedbackList from './components/FeedbackList'
import Header from './components/Header'
import FeedbackData from './data/FeedbackData'

function App() {
  const [feedback, setFeedback] = useState(FeedbackData)

  const deleteFeedback = (id) => {
    // console.log('App:', id)
    if (window.confirm('Are you sure you want to delete?')) {
      // return array excluding the item being deleted
      setFeedback(feedback.filter((item) => item.id !== id))
    }
  }

  return (
    <>
      <Header />
      <div className='container'>
        <FeedbackList
          feedback={feedback}
          handleDelete={deleteFeedback}
        />
      </div>
    </>
  )
}

export default App
