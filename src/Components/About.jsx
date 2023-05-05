import React from "react";

function About() {

    return (
        <section className="about" id="AboutMe">
        
        <h1 className="me"> About Me  
         <img className="aboutme-photo" src={require("../images/sticker.png")} height="130px" width="130px" alt="aboutme" /> 
         </h1>
        <div className="box">
        <div className="aboutMe">
        <div>
        
        <img className="my-photo" src={require("../images/my.jpg")} alt="my " height="350px" width="350px"  />
        </div>
         <div className="myself"> I am Samarth Goyal a software developer student, who is highly driven 
         intern developer ready to put my education and ability into practical business initatives.
         I have a firm background in computer science and programming concepts and practical knowledge in Java, Web Development, and many more.
          I am a quick study who likes working in a hurried setting and is constantly keen to take on new tasks. 
          I am committed to writing clear, effective code that satisfies project objectives, and have a great eye for detail.
           My strong interpersonal abilities and capacity for teamwork make me an invaluable asset to any organization. 
           As a software engineer, I am eager to advance and am dedicated to contributing. 
        </div>
        </div>
        </div>
        </section>
    )
}

export default About;