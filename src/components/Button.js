import PropTypes from 'prop-types'

// Button function
const Button = ({showAdd, onAdd}) => {
  return (
      <button style={showAdd?{backgroundColor: 'red'}:{backgroundColor: 'green'}} onClick={onAdd}
      className='btn'>
        {showAdd?'Close':'Add'}
      </button>
  )
}

// Setting default props
Button.defaultProps = {
    text: 'Submit',
    color: 'steel'
}

// Setting default prop types
Button.propTypes ={
    text: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
    onClick: PropTypes.func
}

export default Button
