// App Level State

import { useState } from "react"
// import FeedbackItem from "./components/FeedbackItem"
// Add FeedbackItem to FeedbackList
import FeedbackList from "./components/FeedbackList"
import Header from "./components/Header"
import FeedbackData from "./data/FeedbackData"

function App() {
  // App level state
  // Pass to FeedbackList
  const [feedback, setFeedback] = useState( FeedbackData )

  return (
    <>
      <Header/>
      <div className="container">
        <FeedbackList feedback={ feedback} />
      </div>
    </>
  )
}

export default App
