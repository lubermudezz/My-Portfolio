import React from 'react'
import { Button, Stack} from '@chakra-ui/react'
import '../Card/Card.css'


const Card = ({ title, text, linkDeploy, linkGithub, tech, video }) => {
    return (
        <div className='cardContainer'>
            <div className='card'>
                <video autoPlay muted loop>
                <source src={video} type="video/mp4" />
                </video>
                <div className='container'>
                    <h3>{title}</h3>
                    <p>{text}</p>
                </div>
                <p className='textTech'>{tech}</p>
                <div className='buttonsContainer'>
                    <Stack spacing={2} direction='row' align='center'>
                        <a href={linkDeploy} target='_blank'><Button className='buttonCardWidth' colorScheme='gray' size='md'>
                            <img className='logoButtonCard' src="https://res.cloudinary.com/luubermudezz/image/upload/v1667269996/Portafolio/web_vgnblv.png" alt="lubermudez on linkedIn" width='25px' />
                            Deploy
                        </Button></a>
                        <a href={linkGithub} target='_blank' ><Button className='buttonCardWidth' colorScheme='gray' size='md'>
                            <img className='logoButtonCard' src="https://res.cloudinary.com/luubermudezz/image/upload/v1667269998/Portafolio/github_gutpsu.png" alt="lubermudez on github" width='25px' />
                            Github
                        </Button></a>
                    </Stack>
                </div>
            </div>
        </div>
    )
}

export default Card