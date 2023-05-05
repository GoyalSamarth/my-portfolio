import React from "react";

function Footer (){
    const date = new Date();
    const year = date.getFullYear();
    return (
        <section className="footer">
        <footer class="" id="footer">
        <div  className="content">
       <div className="copy"><i class="fa-solid fa-envelope"></i> gsamarth011@gmail.com </div>
       <div className="copy"><i class="fa-solid fa-phone"></i> +1 365-228-4971</div>
       <div className="copy"> <a href="https://www.linkedin.com/in/samarth-goyal7/"><i class="fa-brands fa-linkedin"></i> LinkedIn</a></div>
       <div className="copy"> <a href="https://github.com/GoyalSamarth"><i class="fa-brands fa-github"></i> GitHub</a></div>
       </div>
       <p  className="copyright"> <i class="fa-solid fa-copyright"></i> {year} Copyright Samarth Goyal</p>
    <svg className="svg"xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
    <path fill="#0099ff" fill-opacity="1" d="M0,288L48,272C96,256,192,224,288,197.3C384,171,480,149,576,165.3C672,181,768,235,864,250.7C960,267,
    1056,245,1152,250.7C1248,256,1344,288,1392,304L1440,320L1440,320L1392,
    320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,
    576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
      
      </footer>
      </section>
    )
}

export default Footer;