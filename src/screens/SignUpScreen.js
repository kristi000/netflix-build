import React, { useState } from "react"
import "./SignUpScreen.css"

function SignUpScreen() {
  const [signIn, setSignIn] = useState(false)
  return (
    <div className="signupScreen">
      <h1>Sign Up</h1>
      <div className="signupScreenInput">
        <form>
          <input type="email" placeholder="Email Address" />
          <input type="password" placeholder="Password" />
          <button type="submit">Sign Up</button>
          <h4>
            <span className="signupScreenGray"> New to Netflix? </span>
            <span className="signupScreenLink" onClick={() => setSignIn(true)}>
              Sign In now.
            </span>
          </h4>
        </form>
      </div>
    </div>
  )
}

export default SignUpScreen
