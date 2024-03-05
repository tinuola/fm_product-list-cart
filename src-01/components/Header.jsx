import PropTypes from 'prop-types'

function Header({ text, bgColor, textColor }) {
  const headerStyles = {
    // backgroundColor: 'yellowgreen',
    // color: 'black',
    backgroundColor: bgColor,
    color: textColor,
  }

  return (
    // <header style={{ backgroundColor: 'yellowgreen', color: 'black' }}>
    <header style={headerStyles}>
      <div className='container'>
        <h1>{text}</h1>
      </div>
    </header>
  )
}

Header.defaultProps = {
  text: 'Feedback UI - Default Props',
}

Header.propTypes = {
  text: PropTypes.string.isRequired,
}

export default Header

// function Header(props) {
//   return (
//     <header>
//       <div className="container">
//         <h2>{props.text}</h2>
//       </div>
//     </header>
//   )
// }
