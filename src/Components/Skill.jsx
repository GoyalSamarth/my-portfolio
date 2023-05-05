import React from "react";


function Skill (){
    return (
        <section className="skill" id="Skill-Set">
        <div>
            <h1 className="skills"> Skills
         <img className="skill-image" src={require("../images/skill.png")} height="130px" width="130px" alt="skill-me" /> 
            
             </h1>
            </div>
        <div className="skillset">
            <div className="html black" >
            <img src={require("../images/html.png")}  width="100px" height="100px" alt="html"/>
            <span className="skill-name"> HTML </span>
            </div>
            <div className="css white">
            <img src={require("../images/CSS.png")}   width="100px" height="100px" alt="CSS"/>
            <span className="skill-name"> CSS </span>
            </div>
            <div className="js black">
            <img src={require("../images/js.png")}   width="100px" height="100px" alt="js"/>
            <span className="skill-name"> JavaScript </span>
            </div>
            <div className="react white">
            <img src={require("../images/react.png")}   width="100px" height="100px" alt="react"/>
            <span className="skill-name"> React JS </span>
            </div>
            <div className="node black">
            <img src={require("../images/nodejs.png")}   width="100px" height="100px" alt="node"/>
            <span className="skill-name"> Node JS </span>
            </div>
            <div className="mongodb white">
            <img src={require("../images/mongodb.jpg")} width="100px" height="100px" alt="mongodb" />
            <span className="skill-name">MongoDB </span>
            </div>
            <div className="sql black">
            <img src={require("../images/mysql.png")} width="100px" height="100px" alt="mysql" />
            <span className="skill-name">MySQL </span>
            </div>
            <div className="java white">
            <img src={require("../images/java.png")}   width="100px" height="100px" alt="java"/>
            <span className="skill-name"> Java </span>
            </div>
            <div className="git black">
            <img src={require("../images/git.png")}   width="100px" height="100px" alt="git"/>
            <span className="skill-name"> GIT </span>
            </div>
            <div className="github white">
            <img src={require("../images/github.png")}   width="100px" height="100px" alt="github"/>
            <span className="skill-name"> GITHUB </span>
            </div>
            <div className="rest black">
            <img src={require("../images/rest.png")}   width="100px" height="100px" alt="restapi"/>
            <span className="skill-name"> Rest API</span>
            </div>
            <div className="angular white">
            <img src={require("../images/angular.png")}   width="100px" height="100px" alt="angular"/>
            <span className="skill-name"> Angular</span>
            </div>
            <div className="c# black">
            <img src={require("../images/csharp.png")}   width="100px" height="100px" alt="c#"/>
            <span className="skill-name"> .NET C#</span>
            </div>
            <div className="jquery white">
            <img src={require("../images/jquery.png")}   width="100px" height="100px" alt="jquery"/>
            <span className="skill-name"> Jquery</span>
            </div>
            <div className="c black">
            <img src={require("../images/C.png")}   width="100px" height="100px" alt="c"/>
            <span className="skill-name">  C</span>
            </div>
            <div className="springboot white">
            <img src={require("../images/spring_boot.png")}   width="100px" height="100px" alt="springboot"/>
            <span className="skill-name"> Spring Boot</span>
            </div>
            <div className="vs black">
            <img src={require("../images/vscode.png")}   width="100px" height="100px" alt="vs"/>
            <span className="skill-name"> VS Code</span>
            </div>
            <div className="eclipse white">
            <img src={require("../images/eclipse.png")}   width="100px" height="100px" alt="eclipse"/>
            <span className="skill-name">Eclipse</span>
            </div>
            <div className="postman black">
            <img src={require("../images/postman.png")}   width="100px" height="100px" alt="postman"/>
            <span className="skill-name">Postman</span>
            </div>
            <div className="web3 white">
            <img src={require("../images/web3.png")}   width="100px" height="100px" alt="web3"/>
            <span className="skill-name"> Web 3.0</span>
            </div>
            
        </div>

            
        </section>
    )
}
export default Skill;