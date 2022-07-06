import React from 'react'
import './Navbar.css'
import 'animate.css';
import DanteSarmientCv from '../../assets/DanteSarmientoCv.pdf'
import DANTESARMIENTOCV from '../../assets/DANTESARMIENTOCV.png'

export const Navbar = () => {
    return (
        <>
        <div className='content-Nav animate__animated animate__backInDown'>
            <ul class="nav justify-content-center">
                <li class="nav-item ">
                    <a class="nav-link " href="#Description">About me</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link " href="#Projects">Projects</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link " href="#Contact">Contact</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link " href={DANTESARMIENTOCV} download="DANTESARMIENTOCV">CV</a>
                </li>
            </ul>
        </div>
        </>
    )
}
