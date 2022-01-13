import React from 'react'
import '../styles/Login.scss';

const Login = () => {
  return (
    <div>
      <div className="login">
        <div className="form-container">
          <img src="./logos/logo_yard_sale.svg" alt="logo" classNameName="logo"/>
          <h1 className="title">Create a new password</h1>
          <p className="subtitle">Enter a new password for yout acount</p>
          <form action="" className="form">
              <label for="password" className="label">password</label>
              <input type="password" id="password" placeholder="*********" className="input input-password"/>
              <label for="new-password" className="label">Re-enter password</label>
              <input type="password" id="new-password" placeholder="*********" className="input input-password"/>
              <input type="submit" value="Confirm" className="primary-button login-button"/>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login;