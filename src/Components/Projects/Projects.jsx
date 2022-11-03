import React from 'react'
import '../Projects/Project.css'
import Card from '../Card/Card'

const Projects = () => {
    return (
        <div className='projectDiv'>
            <div className='projectContainer'>
                <Card title="Henry's Resto Project" tech='TypeScript, React | Redux, Node.js, MongoDB, Mongoose, Stripe, Tailwind, Cliengo, Google API' text='E-Commerce de comidas, proyecto grupal en el que implementamos autenticación local y de terceros, envío de notificaciones, chatbot, sistema de localización para entrega de pedidos, carrito y pasarela de pagos' photo="https://res.cloudinary.com/luubermudezz/image/upload/v1667267511/Portafolio/proyecto_final_ffzsc9.png" altPhoto='fotito' linkDeploy={'https://restohenry.vercel.app/'} linkGithub='https://github.com/lautaro012/E-Resto-Frontend-'/>
                <Card title="Henry's Resto Project" tech='TypeScript, React - Redux, MongoDB, Mongoose, Stripe, Tailwind, Cliendo, Google API' text='E-Commerce de comidas, desarrollado implementando: TypeScript, MongoDb, Mongoose, Node.js, React - Redux y Tailwind' photo="https://res.cloudinary.com/luubermudezz/image/upload/v1667267511/Portafolio/proyecto_final_ffzsc9.png" altPhoto='fotito' />
                <Card title="Henry's Resto Project" tech='TypeScript, React - Redux, MongoDB, Mongoose, Stripe, Tailwind, Cliendo, Google API' text='E-Commerce de comidas, desarrollado implementando: TypeScript, MongoDb, Mongoose, Node.js, React - Redux y Tailwind' photo="https://res.cloudinary.com/luubermudezz/image/upload/v1667267511/Portafolio/proyecto_final_ffzsc9.png" altPhoto='fotito' />
            </div>
        </div>
    )
}

export default Projects