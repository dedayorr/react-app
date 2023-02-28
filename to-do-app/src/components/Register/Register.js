import React, { useState } from "react";
import "./Register.css"

const Register = ({func}) => {
  const [state, setState] = useState({
    firstame: "",
    lastname: "",
    email: "",
    country: "",
    tel: "",
    dateOfBirth: "",
    favoriteColor: "",
    weight: "",
    gender: "",
    fileName: "",
    actualFile: "",
    bio: "",
  });

  const {
    firstname,
    lastname,
    email,
    country,
    tel,
    dateOfBirth,
    favoriteColor,
    weight,
    gender,
    fileName,
    // actualFile,
    bio,
  } = state;

  console.log(state);

  function handleChange(e) {
    // const {name, value, type} = e.target;
    setState(e.target.value);
  }
  return (
    <div>
      <form>
<p>REGISTER</p>
        <input
          type="text"
          name="firstName"
          placeholder="First Name"
          value={firstname}
          onChange={handleChange}
        />
        <input
          type="text"
          name="lastName"
          placeholder="Last Name"
          value={lastname}
          onChange={handleChange}
        />
        <input
          type="text"
          name="country"
          placeholder="Country"
          value={country}
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          placeholder="Email address"
          value={email}
          onChange={handleChange}
        />
        <input
          type="tel"
          name="tel"
          placeholder="Tel"
          value={tel}
          onChange={handleChange}
        />
        <input
          type="date"
          name="dateOfBirth"
          placeholder="Date of birth"
          value={dateOfBirth}
          onChange={handleChange}
        />
        <input
          type="color"
          name="favoriteColor"
          placeholder="Favorite color"
          value={favoriteColor}
          onChange={handleChange}
        />
        <input
          type="number"
          name="weight"
          placeholder="Weight"
          value={weight}
          onChange={handleChange}
        />
        <div style={{ display: "flex", alignItems: "center" }}>
          <label htmlFor="male">Male</label>
          <input
            type="radio"
            id="male"
            name="gender"
            value="male"
            onChange={handleChange}
            checked={gender === "male"}
          />
        </div>
        <div style={{ display: "flex", alignItems: "center" }}>
          <label htmlFor="female">Female</label>
          <input
            type="radio"
            id="female"
            name="gender"
            value="Female"
            onChange={handleChange}
            checked={gender === "female"}
          />
        </div>
        <div style={{ display: "flex", alignItems: "center" }}>
          <label htmlFor="other">Other</label>
          <input
            id="other"
            type="radio"
            name="gender"
            value="Other"
            onChange={handleChange}
            checked={gender === "Other"}
          />
        </div>
       <label htmlFor="bio">Bio</label>
       <textarea id="bio" name="bio" value={bio} onChange={handleChange} cols="120" rows="10" placeholder="Write about yourself"/>
        <input
        multiple
          type="file"
          name="file"
          value={fileName}
          onChange={handleChange}
        />

<button className="btn-two">Submit</button>
<div className='regLink' onClick={() => func(true)}>Already have an account? Login</div>
      </form>
      
    </div>
  );
};

export default Register;
