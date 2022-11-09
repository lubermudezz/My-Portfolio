import React from 'react'
import '../About/About.css'

const About = () => {
  return (
    <div className='aboutContainer'>
        <img data-aos="fade-right" data-aos-duration="1700"  className='avatarAbout' src="https://res.cloudinary.com/luubermudezz/image/upload/v1667332982/Portafolio/avatar_jrveki.jpg" alt="lu bermudez" />
        <p data-aos="fade-left" data-aos-duration="1700"  className='textAbout'>Mi nombre es Luciana Bermudez, soy Full Stack Developer, me encuentro en Argentina, recién graduada del Bootcamp de Soy Henry, con 800 hs de código💻. Mi objetivo es seguir aprendiendo nuevas tecnologías y poder perfeccionarme en las que ya conozco. Me gusta trabajar en equipo 🤝, poder aportar mis conocimientos y nutrirme del de los demás.</p>
    </div>
  )
}

export default About