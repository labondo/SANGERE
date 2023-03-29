import { Outlet, NavLink } from "react-router-dom";
import logo from "../assets/logo.png";

export default function RootLayout() {
  return (
    <div className="root-layout">
      <header>
        <nav>

          <div className="logo">
            <NavLink to="/" className="nav-link">
              <img src={logo} alt="Logo" />
            </NavLink>
          </div>
          <div>
            <ul className="navbar-nav">
              <li className="nav-item">
                <NavLink to="sell" className="nav-link">
                  <iconify-icon icon="ep:sell"></iconify-icon>
                  <p>Sell on sangere</p>
                </NavLink>
              </li>
              <li className="nav-item" >
                <NavLink to="account" className="nav-link">
                  <iconify-icon icon="bxs:user-circle"></iconify-icon>
                  <p>Account</p>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="cart" className="nav-link">
                  <iconify-icon icon="clarity:shopping-cart-line"></iconify-icon>
                  <p>Cart</p>
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink to="signup" className="nav-link">
                  <button className="btn sign-up">Sign Up</button>
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink to="login" className="nav-link">
                  <button className="btn login">Login</button>
                </NavLink>
              </li>

            </ul>
          </div>

        </nav>
      </header>

      <main>
        <Outlet />
      </main>

      <footer>
        <div className="footer align-items-center">
          <div className="footer-links my-4 justify-content-around">
          <NavLink to="/" ><h1>Sangere</h1></NavLink>
            <ul className="footer-navlinks ">
              Link:
              <li><NavLink to="sell" >Sell on Sangere</NavLink></li>
              <li>Categories</li>
              <li>About Us</li>
            </ul>
            <ul className="footer-socials">
              Follow Us:
              {/* <li><a href="">Facebook</a></li>
              <li><a href="">Instagram</a></li>
              <li><a href="">Twitter</a></li> */}
              <li>Facebook</li>
              <li>Instagram</li>
              <li>Twitter</li>
            </ul>
          </div>

          <div className="copyright justify-content-center">
            <p>sangere@2023</p>
            <p>privacy policy</p>
            <p>terms of use</p>
            <p>business agreement</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

