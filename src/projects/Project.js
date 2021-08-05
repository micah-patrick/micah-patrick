import React, { useEffect, useState } from 'react';
import Header from '../home/Header';
import { useParams } from 'react-router-dom';
import projects from '../db/db.js';
import ReactMarkdown from 'react-markdown';
import gfm from 'remark-gfm';
import NotFound from '../layout/NotFound';
import Social from '../layout/Social';

export default function Project(){
    
    const {projectId} = useParams();
    const project = projects[Number(projectId)-1];
    const {readmeUrl, projectName} = project || "";
    const [readme, setReadme] = useState(`# ${projectName}`);
    
    const getReadme = () => {
        if (readmeUrl){
            fetch(readmeUrl)
            .then(response => response.text())
            .then(setReadme)
            .catch(console.log);
        }
    }

    useEffect(getReadme, [readmeUrl]);


    if (project) {
        return (
            <>
            <Header />
            <div className="container-fluid container-md">
                <div className="markdown">
                    <div className="social social-github">
                        <a className="social social-github" href={project.github} target="_blank" rel="noreferrer"><span>GitHub</span></a>
                    </div>
                    <ReactMarkdown remarkPlugins={[gfm]} children={readme} />
                </div>
            </div>
            <Social /> 
            </>
        )
    }
    return (<NotFound />)
}