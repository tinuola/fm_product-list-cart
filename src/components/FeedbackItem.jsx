// No longer need component level state, since using App state
// import { useState } from 'react'

function FeedbackItem({ item }) {
  // const [rating, setRating] = useState(7)
  // const [text, setText] = useState('Example Feedback Item')

  return (
    <div className='card'>
      {/* <div className='num-display'>{rating}</div>
      <div className='text-display'>{text}</div> */}
      <div className='num-display'>{item.rating}</div>
      <div className='text-display'>{item.text}</div>
    </div>
  )
}

export default FeedbackItem
