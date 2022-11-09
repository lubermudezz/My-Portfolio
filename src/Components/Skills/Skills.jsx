import React from 'react'
import SkillCard from '../SkillCard/SkillCard'
import '../Skills/Skills.css'

const Skills = () => {
  return (
    <div className='skillsContainer'>
        <div className='logoContainerSkills' data-aos="zoom-in-up" >
        <SkillCard link='https://res.cloudinary.com/luubermudezz/image/upload/v1667331355/Portafolio/icons8-javascript-48_imhwo6.png' name='JavaScript' photoAlt='JS' />
        <SkillCard link='https://res.cloudinary.com/luubermudezz/image/upload/v1667329307/Portafolio/react_pagm7q.png' name='React' photoAlt='react' />
        <SkillCard link='https://res.cloudinary.com/luubermudezz/image/upload/v1667331227/Portafolio/icons8-html-5-48_txrk1g.png' name='Html5' photoAlt='html5' />
        <SkillCard link='https://res.cloudinary.com/luubermudezz/image/upload/v1667331104/Portafolio/icons8-css3-48_kzteau.png' name='CSS3' photoAlt='css' />

        </div>        
        <hr className='hrSkills'></hr>
        <div className='logoContainerSkills' data-aos="zoom-in-up" >
        <SkillCard link={'https://res.cloudinary.com/luubermudezz/image/upload/v1667331365/Portafolio/icons8-typescript-48_fh7g1g.png'} name={'TypeScript'} photoAlt='TS'/>
        <SkillCard link={'https://res.cloudinary.com/luubermudezz/image/upload/v1667331359/Portafolio/icons8-mongodb-48_dxnwli.png'} name='MongoDB' photoAlt={'mongodb'} />
        <SkillCard link={'https://res.cloudinary.com/luubermudezz/image/upload/v1667331362/Portafolio/icons8-postgresql-48_dquieq.png'} name='PostgreSql' photoAlt='postgres' />
        <SkillCard link={'https://res.cloudinary.com/luubermudezz/image/upload/v1667507368/Portafolio/icons8-node-js-240_w9lx1y.png'} name='Node.js' photoAlt={'node js'} />
        </div>
        <hr className='hrSkills'></hr>
        <h4 id='otrasHerramientas' data-aos="zoom-in-up">Otras Herramientas</h4>
        <div className='logoContainerSkills' data-aos="zoom-in-up" >
        <SkillCard link='https://res.cloudinary.com/luubermudezz/image/upload/v1667331226/Portafolio/icons8-git-48_qiy47s.png' name='Git' photoAlt='git' />
        <SkillCard link='https://res.cloudinary.com/luubermudezz/image/upload/v1667331103/Portafolio/icons8-bootstrap-48_mqqqon.png' name='Bootstrap' photoAlt='Bootstrap' />
        <SkillCard link='https://res.cloudinary.com/luubermudezz/image/upload/v1667331101/Portafolio/figma_bvsna6.png' name='Figma' photoAlt='figma' />
        <SkillCard link={'https://res.cloudinary.com/luubermudezz/image/upload/v1667331364/Portafolio/icons8-sass-48_scegqr.png'} name='Sass' photoAlt={'sass'} />
        <SkillCard link={'https://res.cloudinary.com/luubermudezz/image/upload/v1667507963/Portafolio/tailwind_brazvx.png'} name='Tailwind' photoAlt={'tailwind'} />
        <SkillCard link={'https://res.cloudinary.com/luubermudezz/image/upload/v1667508029/Portafolio/slack_egfaob.png'} name='Slack' photoAlt={'slack'} />
        </div>




    </div>
  )
}

export default Skills