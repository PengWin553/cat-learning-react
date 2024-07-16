import UserGreeting from "./UserGreeting"
function App() {

  return (
    <>
      <div className="container"></div>

        {/* Renders the welcome message */}
        <UserGreeting isLoggedIn={true} name="Peng Win" />

        {/* Renders the login prompt */}
        {/* <UserGreeting isLoggedIn={false} name="Peng Win" /> */}

        {/* Renders the default values */}
        {/* <UserGreeting /> */}

      </>
  )
}

export default App
