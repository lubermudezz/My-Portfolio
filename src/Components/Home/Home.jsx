import React from 'react'
import '../Home/Home.css'
import mail from '../../img/mail.png'
import linkedin from '../../img/linkedin.png'
import github from '../../img/github.png'


const Home = () => {
  return (
    <div className='homeContainer'>
      <div className='textDivHome'>
        <h2>Hola 👋 Soy</h2>
        <h1>Luciana Bermudez</h1>
        <h3>Desarrolladora Web Fullstack</h3>
        <div className='logoHomeContainer'>
        <p>Contactame!</p>
        <a href='#contact'><img width='25px' src={mail}></img></a>
        <a href='https://www.linkedin.com/in/luciana-bermudez-developer/' target='_blank'><img width='30px' src={linkedin}></img></a>
        <a href='https://github.com/lubermudezz' target='_blank'><img width='28px' src={github}></img></a>
        </div>
      </div>
      <div className='imgDivHome'>
        <img className='profileHome' src="https://res.cloudinary.com/luubermudezz/image/upload/v1663225191/Portafolio/perfil_lkxqrt.jpg" alt="Luciana Bermudez" />
      </div>
      
    </div>
  )
}

export default Home