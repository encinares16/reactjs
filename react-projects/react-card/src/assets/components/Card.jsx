import './Card.css/'
import profile from '../images/profile.jpg';

function Card(){

  let skills = ["HTML","CSS", "JavaScript","ReactJS","NodeJS", "Express"];

  return (
    <div className="card">
      {/* <img src="profile.jpg" alt="profile" height="105" /> */}
      <img src={profile} alt="profile" height="98" />
      <div className="profile_info">
        <h2>Jerome Encinares</h2>
        <p>Web Developer</p>
        <div> 
          <button className="button follow" type="button">Follow</button>
          <button className="button message" type="button">Message</button>
        </div>
      </div>
      <div className="bottom">
        <p>SKILLS</p>
        <hr/>
        <div className="skills">
          {skills.map(skill => <p>{skill}</p>)}
        </div>
      </div>
    </div>
  )
}

export default Card;
