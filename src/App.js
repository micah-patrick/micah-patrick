import React, { useEffect, useState } from 'react';
import Home from './home/Home';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Project from './projects/Project';
import Projects from './projects/Projects';
import About from './about/About';
import projects from './db/db';
import NotFound from './layout/NotFound';

function App() {

  const savedMode = localStorage.getItem("colorMode");

  const mq = window.matchMedia('(prefers-color-scheme: dark)');
  const useDarkMode = mq.matches;

  let initColorMode = useDarkMode ? 'darkMode' : 'lightMode';
  if (savedMode) {
    initColorMode = savedMode;
  }

  const [colorMode, setColorMode] = useState(initColorMode)

  useEffect(() => {
    projects.forEach((project) => getReadme(project))
    if(initColorMode === 'darkMode'){
      document.getElementById("flexSwitchCheckDefault").checked = true;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[]);

  const getReadme = (project) => {
    if (project.readmeUrl){
        fetch(project.readmeUrl)
        .then(response => response.text())
        .then((result) => project.readme = result)
        .catch(console.log);
    }
  }

  const darkModeSwitchHandler = (event) =>{
    if (colorMode === 'lightMode') {
      setColorMode('darkMode');
      localStorage.setItem("colorMode", 'darkMode');
    } else {
      setColorMode('lightMode')
      localStorage.setItem("colorMode", 'lightMode');
    }
  }


  return (
    <div className={`App ${colorMode}`}>
      <Switch >
        <Route exact={true} path="/projects" >
          <Projects projects={projects} />
        </Route>
        <Route exact={true} path="/about" >
          <About />
        </Route>
        <Route exact={true} path="/projects/:projectId" >
          <Project projects={projects} />
        </Route>
        <Route exact={true} path="/" >
          <Home />
        </Route>
        <Route >
          <NotFound />
        </Route>
      </Switch>
      <div className="darkModeSwitch form-check form-switch">
      {/* <span className="oi oi-sun " /> */}
        <input className="form-check-input" 
          type="checkbox" 
          id="flexSwitchCheckDefault" 
          onClick={(event) => darkModeSwitchHandler(event)} 
        />
        <span className="oi oi-moon" style={{top: "0"}} />
      </div>
      <br />
    </div>
  );
}

export default App;
