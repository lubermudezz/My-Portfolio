import React, { useState } from 'react'
import '../Projects/Project.css'
import restoVid from '../../img/restoVid.mp4'
import quizVid from '../../img/quizVid.mp4'
import dogVid from '../../img/dogVid.mp4'
import gamesVid from '../../img/gamesVid.mp4'
import Card from '../Card/Card'
import { Button, Stack } from '@chakra-ui/react'


const Projects = () => {

    const [display, setDisplay] = useState(false)

    function handleClick(e) {
       document.getElementById('moreInfo').style.display = 'block'
       setDisplay(true)
    }

    function handleHideClick(e) {
        document.getElementById('moreInfo').style.display = 'none'
        setDisplay(false)
    }

    return (
        <div className='projectDiv'>
            <div className='projectContainer'>
                <Card title="Henry's Resto Project" tech='TypeScript, React | Redux, Node.js, MongoDB, Mongoose, Stripe, Tailwind, Cliengo, Google API, Nodemailer ' text='E-Commerce de comidas, proyecto grupal en el que implementamos autenticación local y de terceros, envío de notificaciones, chatbot, sistema de localización para entrega de pedidos, carrito y pasarela de pagos' linkDeploy={'https://restohenry.vercel.app/'} linkGithub='https://github.com/lautaro012/E-Resto-Frontend-' video={restoVid} />
                <Card title="Game's Store" tech='JavaScript, React | Redux, PostgreSql, Express, Node.js, Stripe, Passport, Nodemailer' text='E-Commerce de videojuegos. Proyecto grupal, en el que el usuario puede obtener información de los juegos, agregarlos a favoritos y comprarlos para tenerlos en su lista. API: "Rawg"' linkGithub={'https://github.com/lubermudezz/HenryGamesStoreProject'} video={gamesVid} />
                <Card title="Dog's App" tech='JavaScript, React | Redux, PostgreSql, Express, Node.js' text='Este es el primer proyecto que desarrollé. SPA en la que el usuario puede obtener información de las distintas razas de perro, crear nuevos, filtrar y ordenar según los distintos parámetros. API: "The Dog API"' linkGithub={'https://github.com/lubermudezz/Dog-s-App'} linkDeploy='https://dog-s-app.vercel.app/' video={dogVid} />
                <Card id='moreInfo' title="Quiz Game" tech='JavaScript, Css, Html5' text='Demo de juego de preguntas, donde el usuario puede seleccionar respuestas y obtener una puntuación final en base a las respuestas correctas e incorrectas' linkDeploy={'https://quizgamelubermudez.netlify.app/'} linkGithub={'https://github.com/lubermudezz/Quiz-Game'} video={quizVid} />
                
            </div>
            {display ? <Button id='buttonHideShow' onClick={(e) => handleHideClick(e)} >Ocultar</Button> : <Button id='buttonHideShow' onClick={(e) => handleClick(e)}>Ver más</Button>}
        </div>
    )
}

export default Projects