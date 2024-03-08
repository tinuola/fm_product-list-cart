// adding useContext

// import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import AboutIconLink from './components/AboutIconLink'
import AboutPage from './pages/AboutPage'
import FeedbackForm from './components/FeedbackForm'
import FeedbackList from './components/FeedbackList'
import FeedbackStats from './components/FeedbackStats'
import Header from './components/Header'
// import FeedbackData from './data/FeedbackData'
import { FeedbackProvider } from './context/FeedbackContext'

function App() {
  // const [feedback, setFeedback] = useState(FeedbackData)

  // Move to context
  // const deleteFeedback = (id) => {
  //   if (window.confirm('Are you sure you want to delete?')) {
  //     // return array excluding the item being deleted
  //     setFeedback(feedback.filter((item) => item.id !== id))
  //   }
  // }

  // const addFeedback = (newFeedback) => {
  //   newFeedback.id = uuidv4()
  //   // console.log(newFeedback)
  //   setFeedback([newFeedback, ...feedback])
  // }

  return (
    <FeedbackProvider>
      <Router>
        <Header />
        <div className='container'>
          <Routes>
            <Route
              exact
              path='/'
              element={
                <>
                  <FeedbackForm /*handleAdd={addFeedback}*/ />
                  <FeedbackStats /* feedback={feedback} */ />
                  <FeedbackList
                  /* feedback={feedback} */
                  /* handleDelete={deleteFeedback} */
                  />
                </>
              }
            ></Route>

            <Route
              path='/about'
              element={<AboutPage />}
            />
          </Routes>
          <AboutIconLink />
        </div>
      </Router>
    </FeedbackProvider>
  )
}

export default App
