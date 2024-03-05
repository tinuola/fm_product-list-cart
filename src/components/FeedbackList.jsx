import FeedbackItem from './FeedbackItem'

function FeedbackList({ feedback }) {
  // feedback is coming from App Level state
  console.log(feedback)

  if (!feedback || feedback.length === 0) {
    return <p>No Feedback Available.</p>
  }

  return (
    <div className='feedback-list'>
      {feedback.map((item) => (
        // <div>{item.rating}</div>
        <FeedbackItem
          key={item.id}
          item={item}
        />
      ))}
    </div>
  )
}

export default FeedbackList
