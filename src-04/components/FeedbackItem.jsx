// Prop drilling
// Adding icon and deleting item from feedback list

import { FaTimes } from 'react-icons/fa'
import Card from './shared/Card'
import PropTypes from 'prop-types'

function FeedbackItem({ item, handleDelete }) {
  // handleDelete coming from FeedbackList

  // const handleClick = (id) => {
  //   console.log(id)
  // }

  return (
    // <Card reverse={false}>
    <Card>
      <div className='num-display'>{item.rating}</div>
      {/* <button
        onClick={() => console.log('hello')}
        className='close'
      > */}

      {/* <button
        onClick={() => handleClick(item.id)}
        className='close'
      > */}

      <button
        onClick={() => handleDelete(item.id)}
        className='close'
      >
        <FaTimes color='purple' />
      </button>
      <div className='text-display'>{item.text}</div>
    </Card>
  )
}

FeedbackItem.propTypes = {
  item: PropTypes.object.isRequired,
}

export default FeedbackItem
