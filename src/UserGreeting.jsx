import PropTypes from 'prop-types'

function UserGreeting(props){
    const welcomeMessage = <h1 className='welcome-message'>Welcome, {props.userName}.</h1>
    const loginPrompt = <h1 className='login-prompt'>Please log in.</h1>

    // the condition
    return(props.isLoggedIn ? welcomeMessage : loginPrompt)
}

export default UserGreeting

UserGreeting.proptypes = {
    isLoggedIn: PropTypes.bool,
    userName: PropTypes.string,
}

UserGreeting.defaultProps = {
    isLoggedIn: true,
    userName: "Guest",
}