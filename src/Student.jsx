// propTypes = a mechanism that ensures that the passed value is of the correct datatype.
//              ex: propTypes.number
// it won't stop the application from running; it is good for debugging
// it is good practice to include proptypes if you're using props

// defaultProps = default values for props in case they are not passed from the parent componenet
//              ex: name: "DefaultGuest"

import PropTypes from 'prop-types'

function Student(props){

    return(
        <div className="student-container">
            <p>Name: {props.name}</p>
            <p>Age: {props.age}</p>
            <p>Student: {props.isStudent ? "Yes" : "No"}</p>
        </div>
    )
   
}

// props
Student.propTypes = {
    name: PropTypes.string,
    age: PropTypes.number,
    isStudent: PropTypes.bool,
}

// default props
Student.defaultProps = {
    name: "Unknown",
    age: 0,
    isStudent: false,
}

export default Student