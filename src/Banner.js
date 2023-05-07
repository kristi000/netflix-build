import React from "react"
import "./Banner.css"

function Banner() {
  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str
  }

  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url("https://wallpaperaccess.com/full/8485310.jpg")`,
        backgroundPosition: "center center",
      }}
    >
      <div className="bannerContents">
        <h1 className="bannerTitle">Movie Name</h1>
        <div className="bannerButtons">
          <button className="bannerButton">Play</button>
          <button className="bannerButton">My List</button>
        </div>
        <h1 className="bannerDescription">Movie Description</h1>
      </div>
      <div className="bannerFadeBottom" />
    </header>
  )
}

export default Banner
