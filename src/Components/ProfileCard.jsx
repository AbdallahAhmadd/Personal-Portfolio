import './profilecard.css'

import Personal from '../assets/Images/MyPic.jpeg'
import {useState} from "react";

function handleGitClick(){
    window.open('https://github.com/AbdallahAhmadd')
}
function handleLinkedInClick(){
    window.open('https://www.linkedin.com/in/abdallah-ahmed-hassan/')
}
function handleInstagramClick(){
    window.open('https://www.instagram.com/abdallahahmed___/')
}


function ProfileCard(){
    const [isProject,setIsProject] = useState(true)

    function toggleExpand() {
        const container = document.getElementById('container');
        container.classList.toggle('expanded');
        setIsProject(false);
    }

    return(
      <div id={'container'}>

          {isProject && (<div id={'header'}>

            <div id={'logo'}>
                <img src={Personal} alt={'Photo of the author'}/>
            </div>

            <div id={'heading'}>
                <h2>Abdallah Ahmed</h2>
                <h3>Egypt, Cairo</h3>
            </div>

            <div id={'subheading'}>
                <h4>Computer Engineering Student at the<br/>German University in Cairo</h4>
            </div>

          </div>)}

          {isProject && (<div id={'content'}>
              <button onClick={toggleExpand}>Projects</button>
              <button onClick={handleGitClick}>Github<i className="fa-brands fa-github"></i> </button>
              <button onClick={handleLinkedInClick}>LinkedIn<i className="fa-brands fa-linkedin"></i></button>
              <button onClick={handleInstagramClick}>Instagram<i className="fa-brands fa-instagram"></i></button>
          </div>)}

      </div>
    );
}

export default ProfileCard