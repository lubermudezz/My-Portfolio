import { Avatar, Text, Wrap, WrapItem } from '@chakra-ui/react'
import React from 'react'
import { Link } from "react-scroll";

import '../Navbar/NavBar.css'

const NavBar = () => {
    return (
        <div className='navContainer'>
            <span id='spanNavDesk'>
                <Wrap>
                    <WrapItem>
                        <a href='#home'><Avatar name='Lu Bermudez' src='https://res.cloudinary.com/luubermudezz/image/upload/v1663225191/Portafolio/perfil_lkxqrt.jpg' /></a>
                    </WrapItem>
                </Wrap>
                <Text fontSize='2xl' className='text'><a href='#home'>Luciana Bermudez</a></Text>
            </span>
            <ul id='ulNavDesk' className='ulNav'>
                    <a href='#projects'><li>Mis proyectos</li></a>
                    <a href='#skills'><li>Mis habilidades</li></a>
                    <a href='#about'><li>Sobre mí</li></a>
                    <a href='#contact'><li>Contacto</li></a>
                    <a target='_blank' href='https://drive.google.com/file/d/1JJCO7MYCYZTu-pC0-7mQebwfCRnDHTxW/view?usp=sharing'><li>CV</li></a>

            </ul>
            <ul className="ulNav" id='ulNavLaptop'>
            <a href='#projects'><li>Proyectos</li></a>
                    <a href='#skills'><li>Habilidades</li></a>
                    <a href='#about'><li>Sobre mí</li></a>
                    <a href='#contact'><li>Contacto</li></a>
                    <a target='_blank' href='https://drive.google.com/file/d/1JJCO7MYCYZTu-pC0-7mQebwfCRnDHTxW/view?usp=sharing'><li>CV</li></a>
            </ul>
            <ul className='ulNav' id='smallSize'>
            <a href='#projects'><li>📂</li></a>
                    <a href='#skills'><li>💻</li></a>
                    <a href='#about'><li>🙋‍♀️</li></a>
                    <a href='#contact'><li>📩</li></a>
                    <a target='_blank' href='https://drive.google.com/file/d/1JJCO7MYCYZTu-pC0-7mQebwfCRnDHTxW/view?usp=sharing'><li>CV</li></a>
            </ul>
        </div>
        
    )
}

export default NavBar