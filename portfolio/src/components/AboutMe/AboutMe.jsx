import React from 'react'
import PhotoDante from '../../assets/images/PhotoDante.jpg'
import './AboutMe.css'

export const AboutMe = () => {
    return (
        <>
        <div className='container contAbout'>
                <div className='container about'>
                    <div className='contFoto animate__animated animate__backInLeft'>
                        <img src={PhotoDante} alt="" className='ImgDante' />
                    </div>
                    <div className='contText'>
                        <h3 className='h3text '>MY NAME IS</h3>
                        <h2 className='h2text '>DANTE SARMIENTO</h2>
                        <h3 className='h3leyend '>i'M A FULL STACK DEVELOPER</h3>
                    </div>
                </div>
            </div>
        </>
    )
}
