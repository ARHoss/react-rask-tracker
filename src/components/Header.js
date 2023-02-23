import PropTypes from 'prop-types'
import Button from './Button'

const Header = ({title, onAdd, showAdd}) => {

    return (
        <header className='header'>
            <h1>{title}</h1>
            {/* Button component */}
            <Button showAdd={showAdd} onAdd={onAdd} />
        </header>
    )
}

// Setting default props
Header.defaultProps = {
    title: 'Task Tracker'
}

// Setting default prop types
Header.prototypes ={
    title: PropTypes.string.isRequired
}

// Style variable
// const headingStyle = {
//     color:'red', 
//     backgroundColor: 'black'
// }

export default Header
