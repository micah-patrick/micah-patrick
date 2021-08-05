import React, { useEffect } from 'react';
import Home from './home/Home';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Project from './projects/Project';
import Projects from './projects/Projects';
import About from './about/About';
import projects from './db/db';

function App() {

  useEffect(() => {
    projects.forEach((project) => getReadme(project))
  },[]);

  const getReadme = (project) => {
    if (project.readmeUrl){
        fetch(project.readmeUrl)
        .then(response => response.text())
        .then((result) => project.readme = result)
        .catch(console.log);
    }
  }



  return (
    <div className="App">
      <Switch >
        <Route path="/projects" >
          <Projects projects={projects} />
        </Route>
        <Route path="/about" >
          <About />
        </Route>
        <Route path="/:projectId" >
          <Project projects={projects} />
        </Route>
        <Route path="/" >
          <Home />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
