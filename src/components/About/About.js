import React from 'react'
import './About.css'
import AboutImg from "../../Images/About.png"

const About = () => {
  return (
    <about>
    <div className='about-box'>
      <h2>Rooted in the traditions of Northern Italian cuisine, al di l&agrave; has been a Park Slope staple for over ten years.</h2>
      <h2>We are owned and operated by husband and wife team Emiliano Coppa and Chef Anna Klinger.</h2>
    </div>
    <img className='about-image' src={AboutImg}/>
    </about>
  )
}

export default About