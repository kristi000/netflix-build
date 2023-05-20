import React, { useEffect } from "react"
import "./App.css"
import HomeScreen from "./screens/HomeScreen"
import LoginScreen from "./screens/LoginScreen"
import { createRoot } from "react-dom/client"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { auth } from "./firebase"

function App() {
  const user = null

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        // the user is logged in
      } else {
        // the user is logged out
      }
    })
    return unsubscribe
  }, [])

  return (
    <div className="app">
      <Router>
        {" "}
        {!user ? (
          <LoginScreen />
        ) : (
          <Routes>
            <Route path="/" element={<HomeScreen />} />
          </Routes>
        )}
      </Router>
    </div>
  )
}

export default App
