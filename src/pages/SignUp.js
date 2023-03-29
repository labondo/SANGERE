import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import signup from "../assets/signup.png";

export default function SignUp() {
  const navigate = useNavigate();
navigate('/login', { replace: true });

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",    
    phone: "",    
    password: "",
    confirmPassword: "",
  });

  const updateFormData = event =>
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    });

  const { fullName, email, phone, password, confirmPassword } = formData;

  return (
    <div className="container-fluid p-0">
      <div className="sign-up-page">
        <div className="signup-image" style={{ width: "37%" }}>
          <img src={signup} alt="sign up" style={{ width: "100%" }} />
        </div>
        <div className="form m-5" style={{ width: "60%" }}>
          <div className="login-link mx-5 justify-content-end">
            <p className="mx-3"> Already have an account? </p>
            <NavLink to="login">
              <button className="btn ">Log In</button>
            </NavLink>
          </div>
          <h3>Welcome to Sangere.</h3>
          <p>Register your account and get started</p>

          <form>
          <input
              value={fullName}
              onChange={e => updateFormData(e)}
              placeholder="Full Name"
              type="text"
              name="fullName"
              required
            />
            <input
              value={email}
              onChange={e => updateFormData(e)}
              placeholder="Email address"
              type="email"
              name="email"
              required
            />
             <input
              value={phone}
              onChange={e => updateFormData(e)}
              placeholder="Phone Number"
              type="phone"
              name="phone"
              required
            />
            <input
              value={password}
              onChange={e => updateFormData(e)}
              placeholder="Password"
              type="password"
              name="password"
              required
            />
             <input
              value={confirmPassword}
              onChange={e => updateFormData(e)}
              placeholder="Last name"
              type="password"
              name="confirmPassword"
              required
            />

            <button type="submit">Register</button>
          </form>
        </div>
      </div>
    </div>
  )
}