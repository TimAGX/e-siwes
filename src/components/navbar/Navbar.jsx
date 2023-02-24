import React from 'react';
import "./navbar.css";
import McuLogo from "../../img/mcuLogo.png";

function Navbar() {
  return (
    <div className="App">
    <nav>
      <img src={McuLogo} alt="Logo" />
      <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Team</a></li>
        <li><a href="#">Login</a></li>
        <li><a href="#" className="admin">Admin</a></li>
      </ul>
    </nav>
    <div className="card">
      <h2>Log In</h2>
      <form>
        <label htmlFor="email">Email</label>
        <input type="email" id="email" name="email" />
        <label htmlFor="password">Password</label>
        <input type="password" id="password" name="password" />
        <button type="submit">Log In</button>
      </form>
      <p>Don't have an account? <a href="#">Sign up</a></p>
    </div>
    <footer>
        <p>@Olugbenga Timothy 2023</p>
      </footer>
  </div>
  );
}

export default Navbar;