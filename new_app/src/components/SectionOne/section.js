import "./section.css";
import { SiMongodb } from "react-icons/si";
import { FcGoogle } from "react-icons/fc";
import { BsGithub } from "react-icons/bs";
// import { FcGoogle } from "react-icons/Fc";
// import { MdEco } from "react-icons/md";

function Section() {
  return (
    <div className="container">

      <div className="firstDiv">
        <div className="firstText">
          <SiMongodb />
          MongoDB.
        </div>
        <div className="secondText">Log in to your account</div>
        <div className="formDiv">
          <button>
            <FcGoogle /> Google
          </button>
          <button>
            <BsGithub /> Github
          </button>
          <div className="horizontal">
            <hr></hr>or<hr></hr>
          </div>
          <label>Email Address</label>
          <input className="email"></input>
          <div className="buttom">
            <button className="lastbutton">Next</button>
            <div className="lastText">
              Don't have an account? <a href="/">Sign up</a>
            </div>
          </div>
        </div>
      </div>

{/* background image */}
      <div className="secondDiv">
        <div className="img_text">
          <h1>Discover What's New in MongoDB 6.0</h1>
          <p>
            Power modern applications with enriched querying capabilities, new
            operators, added encryption features and more.
          </p>
          <a href="/">Check out what's new →</a>
        </div>
      </div>
      
    </div>
  );
}

export default Section;
