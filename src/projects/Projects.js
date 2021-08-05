import React, { useEffect, useState } from 'react';
import Header from '../home/Header';
import projects from '../db/db.js';
import ProjectPreview from './ProjectPreview';
import Social from '../layout/Social';

export default function Projects(){

    const [previews, setPreviews] = useState("")

    useEffect(() => {
        if(projects){
            setPreviews(projects.map((project) => {
                return <ProjectPreview key={project.id} project={project} />
            }))
        }
    }, []);

    return (
        <>
            <Header />
            <div className="previews container-fluid container-md">
                <div className="row">
                    {previews}
                </div>
            </div>
            <Social />

        </>
    )
}