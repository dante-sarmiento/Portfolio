import React from 'react'
import { Navbar } from './components/Navbar/Navbar'
import { AboutMe } from './components/AboutMe/AboutMe'
import { Description } from './components/Description/Description'
import { Projects } from './components/Projects/Projects'
import { ContactMe } from './components/ContactMe/ContactMe'

export const App = () => {
    return (
        <>
            <header className='heder'>
                <Navbar />
            </header>
            <main>
                <AboutMe />
                <Description />
                <Projects />
                <ContactMe />
            </main>
        </>
    )
}
