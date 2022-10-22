import React from 'react'
import "./landing.css"
export default function Landing({ imageSrc }) {
// imageSrc= props from app.js
    

  return (
    <div className="landing">
      <img src={imageSrc} className="landing-img" />
      <h1 className="landing-title">YOUR TITLE GOES HERE</h1>
    </div>
  



  )
}
