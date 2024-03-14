// Prop drilling
// Adding icon and deleting item from feedback list

import FeedbackItem from './FeedbackItem'
import PropTypes from 'prop-types'

function FeedbackList({ feedback, handleDelete }) {
  // console.log(feedback)

  if (!feedback || feedback.length === 0) {
    return <p>No Feedback Available.</p>
  }

  return (
    <div className='feedback-list'>
      {feedback.map((item) => (
        <FeedbackItem
          key={item.id}
          item={item}
          // handleDelete={(id) => console.log(id)}

          handleDelete={handleDelete} // passed up to Apps
        />
      ))}
    </div>
  )
}

FeedbackList.propTypes = {
  feedback: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      text: PropTypes.string.isRequired,
      rating: PropTypes.number.isRequired,
    })
  ),
}

export default FeedbackList
