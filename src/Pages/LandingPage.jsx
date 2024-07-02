import ProfileCard from "../Components/ProfileCard.jsx";
import './landingpage.css'
import {useEffect, useState} from "react";
function LandingPage(){
    const [isProject, setIsProject] = useState(false);

    useEffect(() => {
        const pageContainer = document.querySelector('.page-container');

        if (isProject) {
            pageContainer.classList.add('full-height');
        } else {
            pageContainer.classList.remove('full-height');
        }
    }, [isProject]);

    const toggleExpand = () => {
        setIsProject(!isProject)
    };
    return(
        <div className={`page-container ${!isProject ? 'full-height' : ''}`}>
            <ProfileCard toggleExpand={toggleExpand} isProject={isProject}/>
        </div>
    );

}

export default LandingPage