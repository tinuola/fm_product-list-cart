import { useState, useContext } from 'react'
import Button from './shared/Button'
import Card from './shared/Card'
import RatingSelect from './RatingSelect'
import FeedbackContext from '../context/FeedbackContext'

function FeedbackForm(/*{ handleAdd }*/) {
  const [text, setText] = useState('') // For form input
  const [rating, setRating] = useState(10)
  const [btnDisabled, setBtnDisabled] = useState(true)
  const [message, setMessage] = useState('')

  const { addFeedback } = useContext(FeedbackContext)

  const handleTextChange = (e) => {
    // console.log(e.target.value)

    // Set validation
    if (text === '') {
      setBtnDisabled(true)
      setMessage(null)
    } else if (text !== '' && text.trim().length <= 10) {
      setBtnDisabled(true)
      setMessage('Text must be at least 10 characters')
    } else {
      setBtnDisabled(false)
      setMessage(null)
    }

    setText(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (text.trim().length > 10) {
      const newFeedback = {
        text,
        rating,
      }
      // console.log(newFeedback)
      // handleAdd(newFeedback)
      addFeedback(newFeedback)
      setText('')
    }
  }

  return (
    <Card>
      <form onSubmit={handleSubmit}>
        <h2>How would you rate your experience with us?</h2>
        <RatingSelect select={(rating) => setRating(rating)} />
        <div className='input-group'>
          <input
            type='text'
            placeholder='write a review'
            onChange={handleTextChange}
            value={text}
          />
          <Button
            type='submit'
            // version='secondary'
            isDisabled={btnDisabled}
          >
            Send
          </Button>
        </div>
        {message && <div className='message'>{message}</div>}
      </form>
    </Card>
  )
}

export default FeedbackForm
