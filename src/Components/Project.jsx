import React from "react";

function Project(){
    return (
        <section className="projects" id="project">
        
            <h1 className="heading"> Projects
         <img className="skill-image" src={require("../images/laptop-wave.png")} height="130px" width="130px" alt="skill-me" /> 
             </h1>

        <div className="row">
            <div className="project-column col-lg-4 col-md-6">
            <div className="card text-center "> 
            <div className="one card-body">
                <h1 className="card-title">My Portfolio</h1>
                <p className="card-text"> This is a website created to showcase my skills and my project. It is right now only for the desktop view.  
                It is made using React Library and Bootstrap CSS. React is a frontend library for building user interfaces
                based on components </p>
                {/* <a href="#01" class="btn btn-primary">GITHUB</a> */}
            </div>
            </div>
            </div>

            <div className="project-column col-lg-4 col-md-6">
            <div className="card text-center ">
            <div className="two card-body">
                <h1 className="card-title"> TinDog </h1>
                <p className="card-text">This is a TinDog Website created using pure HTML and Bootstrap CSS.
                It is similar to the tinder website but it is for the dogs. The purpose for making this website it to understand 
                the concept of pure HTML and Bootstrap CSS.   </p>
                {/* <a href="#1" class="btn btn-primary"> GITHUB</a> */}
            </div>
            </div>
            </div>


            <div className="project-column col-lg-4 col-md-6">
            <div className="card text-center ">
            <div className="three card-body">
                <h1 className="card-title"> Weather App</h1>
                <p className="card-text">This weather app created using nodejs is a web application that allows users
                to view forecast for a location that user is seraching for. It uses nodejs to run the server side code.
                It uses API provided by the OpenWeatherMap to reterive weather data for a specific location. </p>
                {/* <a href="#2" class="btn btn-primary">GITHUB</a> */}
            </div>
            </div>
            </div>


            <div className="project-column col-lg-4 col-md-6">
            <div className="card text-center col-lg-4 col-md-6">
            <div className="four card-body">
                <h1 className="card-title"> Secrets</h1>
                <p className="card-text">This is a secrest web application build using nodejs, ejs(Embedded Javascript Templating) and passport 
                for the authentication. Passport is a node package uses for the local authentication and social login using OAuth. This app allows 
                user to register themselves and share their Secrets anonymous to others.  </p>
                {/* <a href="#3" class="btn btn-primary">GITHUB</a> */}
            </div>
            </div>
            </div>


            <div className="project-column col-lg-4 col-md-6">
            <div className="card text-center col-lg-4 col-md-6">
            <div className="five card-body">
                <h1 className="card-title"> WiKi API</h1>
                <p className="card-text">This is a web application with no user interface. It is a small RESTful (Representational State Transfer) API project
                that provides GET, POST, PUT, PATCH and DELETE functionaliy for a set articles. We can test them 
                using Postman. Rest is a software arechitectural style use for building web services that communicate over the HTTP protocol.  </p>
                {/* <a href="#34" class="btn btn-primary">GITHUB</a> */}
            </div>
            </div>
            </div>


            <div className="project-column col-lg-4 col-md-6">
            <div className="card text-center col-lg-4 col-md-6">
            <div className="six card-body">
                <h1 className="card-title"> Blog Website</h1>
                <p className="card-text"> This is a blog website created using Node.js, EJS and Mongodb as database storage. 
                It is a web application that allow users to read and publish blog posts. Here Node.js is used as the sever side
                that handle HTTP request and EJS used as a templating to generate HTML Pages. </p>
                {/* <a href="#44" class="btn btn-primary">GITHUB</a> */}
            </div>
            </div>
            </div>
        </div>
        </section>
    )

}

export default Project;