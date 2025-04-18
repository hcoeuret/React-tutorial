import profilePic from "./assets/profile.jpg"

function Card(){
  return(
    <div className="card">
      <img className="card-image" src={profilePic} alt="profile picture"></img>
      <h2 className="card-title">Henri</h2>
      <p className="card-text">I am a C++/frontend engineer, I play padel</p>
    </div>
  )
}

export default Card