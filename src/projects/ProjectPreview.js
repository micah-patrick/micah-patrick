import React, { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import { Link } from 'react-router-dom';
import gfm from 'remark-gfm';

export default function ProjectPreview({project}){
    
    const {readmeUrl} = project;
    const [readme, setReadme] = useState(`# ${project.projectName}`);
    const [projectHeader, setProjectHeader] = useState(`# ${project.projectName}`);
    
    const getReadme = () => {
        if (readmeUrl){
            fetch(readmeUrl)
            .then(response => response.text())
            .then(setReadme)
            // .then(() => shortenReadme())
            .catch(console.log);
        }
    }

    useEffect(getReadme, [readmeUrl]);
    
    const shortenReadme = () => {
        if(readme){
            const [first, second, third] = readme.split("#");
            if(first && second && third){
                setReadme("#" + second + "#" + third);
                setProjectHeader(first);
            }
        }
    }
    
    useEffect(shortenReadme, [readme]);

    if (project) {
        return (
            <> 
            <div className="markdown col col-12 col-lg-6">
                    <div className="social social-github">
                        <a className="social social-github" href={project.github} target="_blank" rel="noreferrer"><span>GitHub</span></a>
                    </div>
                    <Link to={`/projects/${project.id}`}>{<ReactMarkdown remarkPlugins={[gfm]} children={projectHeader} />}</Link>
                    <ReactMarkdown remarkPlugins={[gfm]} children={readme} />
            </div>
            </>
        )
    }
    return (<p>not found</p>)
}