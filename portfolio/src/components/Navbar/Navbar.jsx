import React from 'react'
import './Navbar.css'
import 'animate.css';

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
            </ul>
        </div>
        </>
    )
}
