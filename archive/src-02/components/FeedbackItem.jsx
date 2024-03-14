// Introducing useState

import { useState } from 'react'

function FeedbackItem() {
  const [rating, setRating] = useState(7)
  const [text, setText] = useState('Example Feedback Item')

  const handleClick = () => {
    // setRating(10)

    // To have access to previous value
    setRating((prev) => {
      console.log(prev)
      return (prev += 2)
    })
  }

  return (
    <div className='card'>
      <div className='num-display'>{rating}</div>
      <div className='text-display'>{text}</div>
      <button onClick={handleClick}>Click</button>
    </div>
  )
}

export default FeedbackItem
