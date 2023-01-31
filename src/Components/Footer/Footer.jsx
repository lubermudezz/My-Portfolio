import React from 'react'
import '../Footer/Footer.css'

const Footer = () => {
  return (
    <div className='footerContainer'>
        <a id='mouseChange' href='https://github.com/lubermudezz'target='_blank' ><img className='logoFooter' src="https://res.cloudinary.com/luubermudezz/image/upload/v1663265436/Portafolio/github_q91rli.png" alt="luciana bermudez github"/></a>
        <a id='mouseChange' target={'_blank'} href='https://www.linkedin.com/in/luciana-bermudez-developer/' ><img className='logoFooter' src="https://res.cloudinary.com/luubermudezz/image/upload/v1663260545/Portafolio/linkedin_pi5iwj.png" alt="luciana bermudez linkedIn"/></a>
        <button className='buttonFooter'><a id='mouseChange' target='_blank' href='https://drive.google.com/file/d/1LHlpQVdvSvz5cNW1zUOu4qwhsq5SyieM/view?usp=sharing'>Accedé a mi CV</a></button>
    </div>
  )
}

export default Footer