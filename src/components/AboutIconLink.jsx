import { FaQuestion } from 'react-icons/fa'
import { Link } from 'react-router-dom'

function AboutIconLink() {
  return (
    <div className='about-link'>
      {/* <Link to='/about'> */}
      <Link
        to={{
          pathname: '/about',
          // search: '?sort=name', // optional props
          // hash: '#hello' // optional props
        }}
      >
        <FaQuestion size={30} />
      </Link>
    </div>
  )
}

export default AboutIconLink
