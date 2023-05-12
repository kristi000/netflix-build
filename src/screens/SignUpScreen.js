import React, { useState } from "react"
import "./SignUpScreen.css"

// gg
function SignUpScreen() {
  const [signIn, setSignIn] = useState(false)
  return (
    <div>
      <h1>Sign Up</h1>
      <div className="signupScreen__input">
        <form>
          <input type="email" placeholder="Email Address" />
          <button
            onClick={() => setSignIn(true)}
            className="signupScreen__getStarted"
          >
            GET STARTED
          </button>

          <h4>
            <span className="signupScreen__gray">
              Already have an account?{" "}
            </span>
            <span
              className="signupScreen__link"
              onClick={() => setSignIn(true)}
            >
              Sign In.
            </span>
          </h4>
        </form>
      </div>
    </div>
  )
}

export default SignUpScreen
