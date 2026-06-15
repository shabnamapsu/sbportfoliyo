import React from 'react'
import Header from '../component/Header'
import Intro from '../component/Intro'
import About from './About'
import Experiences from '../resources/Expriences'
import Projectlist from '../resources/Projectlist'
import Course from '../resources/Course'
import Contact from '../resources/Contact'
import Footer from '../resources/Footer'
import Sidebaar from './Sidebaar'

function Home() {
  return (
    <>
     <div className="bg-black min-h-screen text-white flex flex-col gap-7 px-20">
  <Sidebaar />
  <Header />
  <Intro />
  <About />
  <Experiences />
  <Projectlist />
  <Course />
  <Contact />
  <Footer />
</div>
    </>
  )
}

export default Home