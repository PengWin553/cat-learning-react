import profilePic from './assets/cat.png'

function Card() {

  return (
    <>
      <div className="card">
        <img className="card-image" src={profilePic} alt="profile picture"></img>
        <div className="card-title">Cat Kobayashi</div>
      <div className="card-text">I am an awesome cat.</div>
      </div>
    </>
  )
}

export default Card
