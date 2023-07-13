import React, { useState } from "react";
import "../styles/forms.css";
import { BiSolidShow, BiSolidHide } from "react-icons/bi";

const Forms = () => {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const [userNameError, setUserNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [password2Error, setPassword2Error] = useState("");
  const [show, setShow] = useState(true)
  const [show2, setShow2] = useState(true)
  const toggleShow = (e) => {
    e.preventDefault();
    setShow(!show)
  }
  const toggleShow2 = (e) => {
    e.preventDefault();
    setShow2(!show2);
  };

  const [users, setUsers] = useState([]);

  const handleChange = (e) => {
    setUser({ ...users, [e.target.name]: e.target.value})
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    if (userName.length < 5) {
      setUserNameError("Minimum username lenght is 5");
    }
    if (!email.includes("@")) {
      setEmailError("Email is not valid");
    }
    if (password.length < 7) {
      setPasswordError("minimum Password lenght is 7");
    }
    if (password2 !== password) {
      setPassword2Error("Password does not match");
    }
    console.log(users);

    setUserName("");
    setEmail("");
    setPassword("");
    setPassword2("");

    // console.log(userName, email, password, password2);
  };
  
  setTimeout(() => {
    setUserNameError("");
    setEmailError('')
    setPasswordError('')
    setPassword2Error('')
  }, 5000)

  return (
    <div className="container">
      <div className="reg">
        <h1>Register</h1>
      </div>
      <form onChange={handleChange}>
        <div className="form-con">
          <label htmlFor="username">Username :</label>
          <br />
          <input
            type="text"
            name="username"
            placeholder="Minimum username lenght is 5"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />
          <br />
          <small>{userNameError}</small>
        </div>
        <div className="form-con">
          <label htmlFor="email">Email :</label>
          <br />
          <input
            type="text"
            id="email"
            placeholder="abc@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <br />
          <small>{emailError}</small>
        </div>
        <div className="form-con">
          <label htmlFor="password">Password : </label>
          <br />
          <div className="form-field">
            <input
              type={show ? "password" : "password"}
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button onClick={toggleShow}>
              {show ? <BiSolidShow /> : <BiSolidHide />}
            </button>
          </div>
          <br />
          <small>{passwordError}</small>
        </div>
        <div className="form-con">
          <label htmlFor="password2">Confirm Password :</label>
          <br />
          <div className="form-field">
            <input
              type={show2 ? "password2" : "password"}
              id="password2"
              value={password2}
              onChange={(e) => setPassword2(e.target.value)}
            />
            <button onClick={toggleShow2}>
              {show2 ? <BiSolidShow /> : <BiSolidHide />}
            </button>
          </div>
          <br />
          <small>{password2Error}</small>
        </div>
        <button type="submit" onClick={handleSubmit}>Register Now</button>
      </form>
    </div>
  );
};

export default Forms;
