import './skills.css'
import React, { useState, useEffect } from 'react';
import SkillsData from '../../assets/Skills.json'

function Skills(){

    const [skills,setSkills]=useState([])
    const [isExpanded, setIsExpanded] = useState(false)

    useEffect(()=>{
        setSkills(SkillsData)
        setIsExpanded(true)
    },[])



    return (
        <div id='skills-container' className={isExpanded ? 'expanded' : ''}>
            <h1>Skills</h1>
            <div className={'skills-grid'}>
                {skills.map((skill, index) => (
                    <div key={index} className={'skill-card'}>
                        <img className={'skills-image'} src={skill.src} alt={skill.name}/>
                    </div>
                ))}

            </div>

        </div>

    );

}

export default Skills;