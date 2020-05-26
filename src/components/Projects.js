import React from 'react';
import PROJECTS from '../data/projects'
const  Project = props =>
{

       const { title, description, img }=props.project;
            
        return(
            <div style={{ display: 'inline-block', width: 450, margin: 10 }}>
            
            <h3>{title}</h3>
            
            <img src={img} alt='fbf' style={{width :270 , height :200}}></img>
            <p>{description}</p>
          
            </div>
        )

    
}
const Projects = () =>
(
    <div>
        <h2>PROJECTS</h2>
        <div>
            {
       PROJECTS.map(PROJECT => (
               <Project key={PROJECT.id} project={PROJECT}/>
               )
       )
            }
        </div>
        </div>
    )

export default Projects;