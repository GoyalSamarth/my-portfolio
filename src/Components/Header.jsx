import React from "react";



function Header() {
return (
<section id="intro"  > 

<nav class="navbar navbar-expand-lg navigation ">
  <div class="container-fluid">
    <a class="navbar-brand nav-text " href="#SG"><h1 className="sg">SG</h1></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavDropdown">
      <ul class="navbar-nav ms-auto  ">
        <li class="nav-item nav-text">
          <a class="nav-link" href="#AboutMe">About</a>
        </li>
        <li class="nav-item nav-text">
          <a class="nav-link" href="#Skill-Set">Skills</a>
        </li>
        <li class="nav-item nav-text">
          <a class="nav-link" href="#project">Projects</a>
        </li>
        <li class="nav-item nav-text">
          <a class="nav-link" href="#work">Work Experince</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
<section className="introduction" id="SG">
  <div className="myname" >
    <span className="name"> I am Samarth Goyal  </span><br></br>
    <span className="name"> Future Developer </span>
    </div>
    <div > 
    <img className="intro-photo" src={require('../images/intro-my.png')} alt="intro-logo"/> 
    </div>
    </section>
  

</section>

)
}

export default Header;