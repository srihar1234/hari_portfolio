/* eslint-disable no-unused-vars */
import Footer from "../Components/Footer"
import HeroImage2 from "../Components/HeroImage2"
import List from "../Components/List";
import Navbar from "../Components/Navbar"
import React from 'react';


function Skills() {
  return (
    <div>
      <Navbar/>
      <HeroImage2 
      heading="SKILLS"
      text="SOME INFO ABOUT ME"/>
      <List/>
      <Footer/>
    </div>
  )
}

export default Skills
