
import React from 'react'
import './Description.css'

export const Description = () => {
    return (
        <>
            <div className='container'  id='Description'>
                <h1 className='titless'>About Me</h1>
            </div>
            <div>
                <div className='container description'>
                    <div className="card">
                        <div class="card-body">
                            <h2 className="card-title title">WHO I AM?</h2>
                            <h3 className='descrep'> I'm a full stack web developer. I've a knowledge of front and back end development. Do you want work with me?<a className='alink' href='#Contact'> <b className='sub'>Contact me</b></a></h3>

                        </div>
                    </div>
                    <div class="card">
                        <div className="card-body">
                            <h2 className="card-title title">WHERE I STUDY?</h2>
                            <h3 className='descrep'>I started studying in 2021 at Rolling Code School (Tucumán). Complementing with various web courses.</h3>
                        </div>
                    </div>

                </div>
                <div className='container description'>
                    <div class="card ">
                        <div class="card-body">
                            <h2 class="card-title titlek">MY KNOWLEDGE</h2>
                            <div className='knoeledge'>
                                <div className='know'>
                                    <h3 className='descrepk'>-HTML5</h3>
                                    <h3 className='descrepk'>-CSS3</h3>
                                    <h3 className='descrepk'>-JAVASCRIPT</h3>
                                    <h3 className='descrepk'>-REACT</h3>
                                    <h3 className='descrepk'>-BOOTSTRAP</h3>
                                </div>
                                <div className='know'>
                                    <h3 className='descrepk'>-MONGO DB</h3>
                                    <h3 className='descrepk'>-NODE JS</h3>
                                    <h3 className='descrepk'>-EXPRESS JS</h3>
                                    <h3 className='descrepk'>-ANT DESIGN</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
