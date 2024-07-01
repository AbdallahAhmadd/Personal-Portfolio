import './skills.css'
import React, { useState, useEffect } from 'react';
import SkillsData from '../../assets/Skills.json'

function Skills(){

    const [skills,setSkills]=useState([])

    useEffect(()=>{
        setSkills(SkillsData)
    },[])

    return (
        <div id={'skills-container'}>
            <h1>Skills</h1>
            <div className={'skills-grid'}>
                {skills.map((skill,index)=>(
                    <div key={index} className={'skill-card'}>
                        <img className={'skills-image'} src={skill.src} alt={skill.name}/>
                    </div>
                ))}

            </div>

        </div>

    );

}

export default Skills;