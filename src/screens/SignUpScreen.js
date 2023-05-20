import React, { useRef, useState } from "react"
import { auth } from "../firebase"

import "./SignUpScreen.css"

function SignUpScreen() {
  const emailRef = useRef(null)
  const passwordRef = useRef(null)

  const register = (e) => {
    e.preventDefault()

    auth
      .createUserWithEmailAndPassword(
        emailRef.current.value,
        passwordRef.current.value
      )
      .then((authUser) => {
        console.log(authUser)
      })
      .catch((error) => {
        alert(error.message)
      })
  }

  const signIn = (e) => {
    e.preventDefault()

    auth
      .signInWithEmailAndPassword(
        emailRef.current.value,
        passwordRef.current.value
      )
      .then((authUser) => {
        console.log(authUser)
      })
      .catch((error) => {
        alert(error.message)
      })
  }

  return (
    <div className="signupScreen">
      <h1>Sign Up</h1>
      <div className="signupScreenInput">
        <form>
          <input ref={emailRef} type="email" placeholder="Email Address" />
          <input ref={passwordRef} type="password" placeholder="Password" />
          <button type="submit" onClick={signIn}>
            Sign Up
          </button>
          <h4>
            <span className="signupScreenGray"> New to Netflix? </span>
            <span className="signupScreenLink" onClick={register}>
              Sign In now.
            </span>
          </h4>
        </form>
      </div>
    </div>
  )
}

export default SignUpScreen
