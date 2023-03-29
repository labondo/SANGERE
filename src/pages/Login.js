import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import login from "../assets/login.png";

export default function Login() {
  const navigate = useNavigate();
navigate('/signup', { replace: true });

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

  const {phone, password} = formData;

  return (
    <div className="container-fluid p-0">
      <div className="sign-up-page">
        <div className="signup-image" style={{ width: "37%" }}>
          <img src={login} alt="sign up" style={{ width: "100%" }} />
        </div>
        <div className="form m-5" style={{ width: "60%" }}>
          <div className="login-link mx-5 justify-content-end">
            <p className="mx-3"> Don't have an account yet? </p>
            <NavLink to="signup">
              <button className="btn ">Register</button>
            </NavLink>
          </div>
          <h3>Log In to Sangere.</h3>
          <p>Log in to your existing Sangere account</p>

          <form>
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

            <button type="submit">Log In</button>

            <p className="my-5" >Forgotten Password? <span style={{color: "#FC5A00"}}> Reset Here</span></p>
          </form>
        </div>
      </div>
    </div>
  )
}