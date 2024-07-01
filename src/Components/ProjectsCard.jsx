import './projectcard.css'
import {useEffect, useState} from "react";
import SkillsData from "../assets/Skills.json";




function ProjectsCard({image,title,subtitle,viewUrl,codeUrl,hasView=true}){
    const [isExpanded, setIsExpanded] = useState(false)

    useEffect(()=>{
        setIsExpanded(true)
    },[])

    function ViewClick(){
        window.open(viewUrl);
    }
    function CodeClick(){
        window.open(codeUrl);
    }
    return(
      <div id={'project-container'}  className={isExpanded ? 'expanded' : ''}>

          <div id={'project-image-container'}>
              <img id={'project-image'} src={image} alt={title}/>
              <div id={'overlay'}>
                  <div className={'project-buttons-container'}>
                      {hasView && (<button onClick={ViewClick}> View <i className="fa-solid fa-arrow-up-right-from-square"></i></button>)}
                      <button onClick={CodeClick}>Code <i className="fa-brands fa-github"></i></button>
                  </div>

              </div>
          </div>


          <div className={'project-info'}>
              <h2>{title}</h2>
              <p>{subtitle}</p>
          </div>

      </div>
    );
}

export default ProjectsCard;