import { NavLink, useNavigate } from "react-router-dom";
import marketWoman from "../assets/slider/slide1.png"

export default function SellOnSangere() {
  const navigate = useNavigate();
navigate('/signup', { replace: true });

  const myRow = {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    marginTop: ""
  }
  const myCol = {
    display: "flex",
    flexDirection: "column",
    // alignItems: "center",
    justifyContent: "space-around",
    marginTop: ""
  }
  return (
    <div className="conatainer m-5 ">
      <div className="sell-page " >
        <div className="sell-intro justify-content-evenly" style={myRow}>
          <div className="sell-intro-text">
            <h2>Build your business {<br />} with Sengere</h2>
            <p>Sengere is the largest online community in your locality. Sell to more customers easily in your own store. Sengere is an online community in your locality. We help your customers to locate your store and to patronize you Reach every person in your community easily. Get Your store on Sengere today.</p>
            <NavLink to="signup" className="">
              <button className="btn">Register your business</button>
            </NavLink>
          </div>
          <div className="sell-intro-slide">
            <img src={marketWoman} alt="market woman"></img>
          </div>
        </div>

        <div className="why-sell mt-5" style={myCol}>
          <h3>Why sell on Sangere?</h3>
          <div className="why-sell-reasons" style={myRow}>
            <div className="" style={myRow}>
              <hr />
              <ul>
                <li>
                  <h4><span style={{color: "#FC5A00"}}>01</span>{<br />} Earn More online</h4>
                  <p>Our commission fees are as low as 1% and you only pay when you have successfully sold a product or offered a service</p>
                </li>
                <li>
                  <h4><span style={{color: "#FC5A00"}}>03</span>{<br />} Nearness to customers</h4>
                  <p>Sengere is an online community in your locality. We help your customers to locate your store and to patronize you.</p>
                </li>
              </ul>
            </div>
            <div style={myRow}>
              <hr />
              <ul>
                <li>
                  <h4><span style={{color: "#FC5A00"}}>02</span>{<br />} You are in charge</h4>
                  <p>You decide the price for your return policy, your method of delivery on paid orders, and other important options.</p>
                </li>
                <li>
                  <h4><span style={{color: "#FC5A00"}}>04</span>{<br />} Easy Communication</h4>
                  <p>We make it easier for you to communicate with customers who may like to chat with you about your products and services.</p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        
          <NavLink to="signup" className="sell-btn ">
            <button className="btn mt-5 ">Register Now</button>
          </NavLink>
          
        
      </div>

      

    </div>
    
  )
}