import React from 'react'
import '../Projects/Project.css'
import restoVid from '../../img/restoVid.mp4'
import quizVid from '../../img/quizVid.mp4'
import dogVid from '../../img/dogVid.mp4'
import Card from '../Card/Card'

const Projects = () => {
    return (
        <div className='projectDiv'>
            <div className='projectContainer'>
                <Card title="Henry's Resto Project" tech='TypeScript, React | Redux, Node.js, MongoDB, Mongoose, Stripe, Tailwind, Cliengo, Google API' text='E-Commerce de comidas, proyecto grupal en el que implementamos autenticación local y de terceros, envío de notificaciones, chatbot, sistema de localización para entrega de pedidos, carrito y pasarela de pagos'  linkDeploy={'https://restohenry.vercel.app/'} linkGithub='https://github.com/lautaro012/E-Resto-Frontend-' video={restoVid} />
                <Card title="Dog's App" tech='JavaScript, React | Redux, PostgreSql, Express, Node.js' text='Este es el primer proyecto que desarrollé. SPA en la que el usuario puede obtener información de las distintas razas de perro, crear nuevos, filtrar y ordenar según los distintos parámetros. API: "The Dog API"' linkGithub={'https://github.com/lubermudezz/Dog-s-App'} linkDeploy='https://dog-s-app.vercel.app/' video={dogVid} />
                <Card title="Quiz Game" tech='JavaScript, Css, Html5' text='Demo de juego de preguntas, donde el usuario puede seleccionar respuestas y obtener una puntuación final en base a las respuestas correctas e incorrectas' linkDeploy={'https://quizgamelubermudez.netlify.app/'} linkGithub={'https://github.com/lubermudezz/Quiz-Game'} video={quizVid} />
            </div>
        </div>
    )
}

export default Projects