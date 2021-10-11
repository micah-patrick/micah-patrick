import React from 'react';
import Header from '../home/Header';
import Social from '../layout/Social';

import about1 from '../assets/about-01.png'
import about2 from '../assets/about-02.png'
import about3 from '../assets/about-03.png'


export default function About() {
    



    return (
        <>
        <Header />
        <div className="container-fluid container-md">
            <div className="about row align-items-center">




                <div className="illustration col col-12 col-md-6">
                    <img style={{maxWidth: "100%"}} src={about1} alt="about Micah" />
                </div>


                <div className="col col-12 col-md-6">
                    <p>
                    I'm a recent Thinkful graduate in software engineering. I'm a full-stack developer. I also have a bachelor's degree in graphic design. I live and work in Bozeman, Montana.
                    </p>
                    <h2>About Me</h2>
                    <p>
                    I've always loved the challenge of puzzles. I also love art. I'm passionate about coding because it combines the precision and problem-solving nature of puzzles and the beauty of art. I love making the web a better place by creating functional code combined with a form that communicates and just maybe adds some beauty to the world. I love working with others.
                    </p>
                </div>




                <hr />




                <div className="illustration col order-md-2 col-12 col-md-6">
                    <img style={{maxWidth: "100%"}} src={about2} alt="about Micah" />
                </div>


                <div className="col order-md-1 col-12 col-md-6">
                    <h3>Here are some of my skills:</h3>
                    <ul>
                        <li>Full-stack dev</li>
                        <li>Javascript</li>
                        <li>React Apps</li>
                        <li>PostgreSQL</li>
                        <li>Express RESTful APIs</li>
                        <li>Node.js</li>
                        <li>Git and GitHub</li>
                        <li>HTML5</li>
                        <li>CSS3</li>
                        <li>Bootstrap</li>
                    </ul>
                </div>




                <hr className="order-md-3" />




                <div className="illustration col order-md-4 col-12 col-md-6">
                    <img style={{maxWidth: "100%"}} src={about3} alt="about Micah" />
                </div>


                <div className="col order-md-5 col-12 col-md-6">
                    <h3>As a resident of the beautiful Bozeman, Montana, you can imagine, I love the outdoors. Here are some more of my hobbies and interests:</h3>
                    <ul>
                        <li>Camping</li>
                        <li>Hiking</li>
                        <li>Photography</li>
                        <li>Listening to podcasts</li>
                        <li>Learning new things</li>
                        <li>Audiobooks</li>
                        <li>Science fiction movies and television</li>
                    </ul>
                </div>




            </div>
        </div>
        <Social /> 
        </>
    )

}