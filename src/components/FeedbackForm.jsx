import { useState } from 'react'
import Button from './shared/Button'
import Card from './shared/Card'

function FeedbackForm() {
  // For input
  const [text, setText] = useState('')
  const [btnDisabled, setBtnDisabled] = useState(true)
  const [message, setMessage] = useState('')

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

  return (
    <Card>
      <form>
        <h2>How would you rate your experience with us?</h2>
        {/* ToDo: Rating select  */}
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
