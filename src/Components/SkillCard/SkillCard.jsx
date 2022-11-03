import React from 'react'
import '../SkillCard/SkillCard.css'

const SkillCard = ({link, name, photoAlt}) => {
    return (
        <div className='skillCard'>
            <img src={link} width='80px' alt={photoAlt} />
            <p>{name}</p>
        </div>
    )
}

export default SkillCard