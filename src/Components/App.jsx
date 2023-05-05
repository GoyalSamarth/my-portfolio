import React from "react";
// import ReactDOM from "react-dom";
import Header from "./Header";
import About from "./About";
import Skill from "./Skill";
import Project from "./Project";
import WorkExperince from "./WorkExperince";

import Footer from "./Footer";


function App(){

    return (
        <div >
        <Header /> 
        <center><hr></hr></center>
        <About />
        <center><hr></hr></center>
        <Skill />
        <center><hr></hr></center>
        <Project />
        <center><hr></hr></center>
        <WorkExperince/>
        <center><hr></hr></center>
        <Footer/>
        </div>
        
    )
}


export default App; 