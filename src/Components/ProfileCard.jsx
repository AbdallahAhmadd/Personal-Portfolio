import './profilecard.css'
import SkillsCard from '../Components/Skills/Skills.jsx'
import Personal from '../assets/Images/MyPic.jpeg'
import {useState} from "react";
import ProjectsCard from "./ProjectsCard.jsx";
import HeartLink from '../../src/assets/Images/HeartLink.png'
import Qr from '../assets/Images/Qrcode.png'
import CardInfo from '../assets/Images/CardInfo.png'
import Ecommerce from '../assets/Images/Ecommerce.png'

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
        setIsProject(!isProject)
    }

    return(
        <div id="container" className={!isProject ? 'row' : ''}>

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
                <button onClick={handleGitClick}>Github<i className="fa-brands fa-github"></i></button>
                <button onClick={handleLinkedInClick}>LinkedIn<i className="fa-brands fa-linkedin"></i></button>
                <button onClick={handleInstagramClick}>Instagram<i className="fa-brands fa-instagram"></i></button>
            </div>)}

            {!isProject && (<div id={'profile-skills-container'} >
                <i onClick={toggleExpand}  className="fa-solid fa-arrow-left"></i>
                <SkillsCard/>
            </div>)}


            {!isProject && (<div id={'profile-projects-container'}>
                <ProjectsCard image={Ecommerce}
                              title={'Ecommerce Admin Page'}
                              subtitle={'This project is a MERN (MongoDB, Express, React, Node.js) stack web application designed to showcase the fundamental CRUD operations.'}
                              codeUrl={'https://github.com/AbdallahAhmadd/E-commerce'}
                              hasView={false}/>
                <ProjectsCard image={HeartLink}
                              title={'HeartLink'}
                              subtitle={'A TypeScript-based web application designed to manage donation activities involving organizations, donors, and administrators.'}
                              codeUrl={'https://github.com/AbdallahAhmadd/Five-Guys'}
                              viewUrl={'https://heart-link.vercel.app/'}/>
                <ProjectsCard image={Qr}
                              title={'Qr Code Generator'}
                              subtitle={'The QR Code Generator is a web application that enables users to easily generate QR codes for any URL using an external API.'}
                              codeUrl={'https://github.com/AbdallahAhmadd/Qr-code-Generator'}
                              viewUrl={'https://qr-code-generator-ten-beta.vercel.app/'}/>
                <ProjectsCard image={CardInfo}
                              title={'Interactive Card Info'}
                              subtitle={'This project is a React application that displays a credit card with its details and includes a form to input the card information.'}
                              codeUrl={'https://github.com/AbdallahAhmadd/Interactive-Card-Info'}
                              viewUrl={'https://interactive-card-info.vercel.app/'}/>



            </div>)}

        </div>
    );
}

export default ProfileCard