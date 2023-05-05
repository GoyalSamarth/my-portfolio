import React from "react";

function WorkExperince(){

    return (
        <section className="workexperince" id="work">
        <div className="workexp">
        <h1 className="work-heading"> Work Experince
        <img className="skill-image" src={require("../images/work.png")} height="130px" width="130px" alt="skill-me" /> 
        
         </h1>
        <div className="works">
            <h1 className="IT"> IT Support  Intern 
            <br></br>At TIP Canada </h1>
            <div className="exppara">During my internship as an IT Support intern, I had the opportunity to work alongside seasoned IT experts. My main responsibility was to provide technical assistance to end-users by troubleshooting hardware and software issues, and guiding them on software applications and installations. The Fresh-Service and Service-Now platforms were utilized by end-users to raise tickets for technical issues, and I successfully resolved over 300 tickets during my tenure. Ensuring that every ticket was appropriately assigned to the relevant group, such as the developing team or service desk, was crucial.

 <br></br><br></br>In addition to my primary role, I created and managed user profiles, granting necessary permissions based on job positions while keeping their profiles updated. Furthermore, I was responsible for maintaining accurate hardware inventory records.

<br></br><br></br>As an IT support professional, effective communication with users is essential to resolve their issues. I possess excellent communication skills, which make this task effortless. Additionally, I am responsible for communicating updates and progress to users, ensuring their satisfaction with the services provided. </div>
            </div>
        </div>
        </section>
    )
}

export default WorkExperince; 