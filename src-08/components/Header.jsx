import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

function Header({ text, bgColor, textColor }) {
  const headerStyles = {
    backgroundColor: bgColor,
    color: textColor,
  }

  const linkStyles = {
    backgroundColor: bgColor,
    color: textColor,
    textDecoration: 'none',
  }

  return (
    <header style={headerStyles}>
      <div className='container'>
        <h1>
          <Link
            style={linkStyles}
            to='/'
          >
            {text}
          </Link>
        </h1>
      </div>
    </header>
  )
}

Header.defaultProps = {
  text: 'Feedback UI',
  bgColor: 'rgba(0,0,0, 0.4)',
  textColor: '#ff6a95',
}

Header.propTypes = {
  text: PropTypes.string.isRequired,
  bgColor: PropTypes.string,
  textColor: PropTypes.string,
}

export default Header
