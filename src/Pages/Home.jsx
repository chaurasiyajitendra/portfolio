import React from 'react'
import ThemeTogle from '../camponents/ThemeTogle'
import Starbackground from '../camponents/Starbackground'
import Navbar from '../camponents/Navbar'
import HeroSection from '../camponents/HeroSection'
import Aboutme from '../camponents/Aboutme'
import Skillsection from '../camponents/Skillsection'
import Projectsection from '../camponents/Projectsection'
import ContectMe from '../camponents/ContectMe'

const Home = () => {
  return (
    <div className='min-h-screen bg-background text-foreground overflow-x-hidden'>
      <ThemeTogle />
      <Starbackground />
      <Navbar />
      <main>
        <HeroSection />
        <Aboutme />
        <Skillsection/>
        <Projectsection />
        <ContectMe/>
      </main>
    </div>
  )
}

export default Home