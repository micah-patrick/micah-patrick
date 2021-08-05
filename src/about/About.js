import React from 'react';
import Header from '../home/Header';
import Social from '../layout/Social';
import about from '../assets/about.png';

export default function About() {

    return (
        <>
            <Header />
            <div className="about container-fluid container-md">
                <div className="row">
                    <div className="col col-12 col-md-8">
                        <p>
                        I'm a Thinkful student studying software engineering. I'm on my way to becoming a full-stack developer. I also have a bachelor's degree in graphic design. I live and work in Bozeman, Montana.
                        </p>
                        <h2>About Me</h2>
                        <p>
                            I've always loved the challenge of puzzles. I also love art. I'm passionate about web development because it combines the precision and problem-solving nature of puzzles and the beauty of art. I love making the web a better place by creating functional code combined with a form that communicates and just maybe adds some beauty to the world. I love working with others.
                        </p>
                    </div>
                    <div className="col col-12 col-md-4">
                        <img src={about} style={{width: '100%'}} alt="Micah" />
                    </div>
                    <div className="col col-12 col-lg-6">
                        <h2>About Me</h2>
                        <p>
                            I've always loved the challenge of puzzles. I also love art. I'm passionate about web development because it combines the precision and problem-solving nature of puzzles and the beauty of art. I love making the web a better place by creating functional code combined with a form that communicates and just maybe adds some beauty to the world. I love working with others.
                        </p>
                    </div>
                    <div className="col col-12 col-lg-6">
                        <p>
                            Here are some of the services that I provide:
                        </p>
                        <ul>
                            <li>Full-stack dev</li>
                            <li>Javascript</li>
                            <li>React Apps</li>
                            <li>Express RESTful APIs</li>
                            <li>Node.js</li>
                            <li>HTML5</li>
                            <li>CSS3</li>
                        </ul>
                    </div>
                    <div className="col col-12 col-lg-6">
                        <p>
                            As a resident of the beautiful Bozeman, Montana, you can imagine, I love the outdoors. Here are some more of my hobbies and interests:
                        </p>
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