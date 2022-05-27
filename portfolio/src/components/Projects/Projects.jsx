import React from 'react'
import './Projects.css'

export const Projects = () => {
    return (
        <>
            <div className='container tit' id='Projects'>
                <h1 className='titless'>Projects</h1>
            </div>
            <div className='container proy'>
                    <div className='container proj'>
                        <h2><b>On The Rocks</b></h2>
                        <h5>This is a first Rolling Code project about different cocktails. It was made using HTML5, CSS3 and Botstrap </h5>
                        <div className='linki'>
                            <a className='linkss' href="https://ontherocks1.netlify.app/">View App</a>
                        </div>
                    </div>
                    <div className='container proj'>
                        <h2><b>Gamer Guy</b></h2>
                        <h5>This is a second Rolling Code project. It's a videogame platform. it was made using HTML5, CSS3, Bootstrap and Javascript</h5>
                        <div className='linki'>
                            <a className='linkss' href="https://gamerguy.netlify.app/pages/login/login.html">View App</a>
                        </div>
                    </div>
                    <div className='container proj'>
                        <h2><b>Big Burger</b></h2>
                        <h5>This is Rolling Code final project. It's a restaurant menu. It was made using stack MERN.(MongoDB, Express, React and Node)</h5>
                        <div className='linki'>
                            <a className='linkss' href="https://bigburger-front.herokuapp.com">View App</a>
                        </div>
                    </div>
                    <div className='container proj'>
                        <h2><b>Movie Pop</b></h2>
                        <h5>This is a personal project. It's a movies platform. It was made using stack MERN.(MongoDB, Express, React and Node) </h5>
                        <div className='linki'>
                            <a className='linkss' href="https://app-moviepop-fronted.herokuapp.com">View App</a>
                        </div>

                    </div>
            </div>
        </>
    )
}
