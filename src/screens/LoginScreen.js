import React, { useState } from "react"
import "./LoginScreen.css"
function LoginScreen() {
  const [signIn, setSignIn] = useState(false)

  return (
    <div className="loginScreen">
      <div className="loginScreenBackground">
        <img
          className="loginLogo"
          src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
          alt=""
        />
        <button onClick={() => setSignIn(true)} className="loginScreenButton">
          Sign In
        </button>
        <div className="loginScreenGradient" />
      </div>
      <div className="loginScreenBody">
        {signIn ? (
          <signInScreen />
        ) : (
          <>
            <h1>Unlimited films, TV programmes and more.</h1>
            <h2>Watch anywhere. Cancel at any time.</h2>
            <h3>
              Ready to watch? Enter your email to create or restart your
              membership.
            </h3>
            <div className="loginScreenInput">
              <form>
                <input type="email" placeholder="Email Address" />
                <button
                  onClick={() => setSignIn(true)}
                  className="loginScreenGetStarted"
                >
                  GET STARTED
                </button>
              </form>
            </div>
          </>
        )}
      </div>
    </div>
  )
}

export default LoginScreen
