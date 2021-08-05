
import React, { useState } from 'react';

export default function Social(){

    const messages = {
        blank: "\u00A0",
        linkedin: "Come connect with me.",
        github: "Come see what I'm working on.",
        twitter: "There's really nothing to see here.",
    };

    const [socialMessage, setSocialMessage] = useState(messages.blank)
    
    return (
        <>
        <div className="row socials navWrapper" >
                <hr />
                <div className="col social social-linkedin">
                    <a href="https://www.linkedin.com/in/micah-patrick/" target="_blank" rel="noreferrer"
                        onMouseEnter={() => setSocialMessage(messages.linkedin)}
                        onMouseLeave={() => setSocialMessage(messages.blank)}
                    ><span>LinkedIn</span></a>
                </div>
                <div className="col social social-github">
                    <a href="https://github.com/micah-patrick" target="_blank" rel="noreferrer"
                        onMouseEnter={() => setSocialMessage(messages.github)}
                        onMouseLeave={() => setSocialMessage(messages.blank)}
                    ><span>GitHub</span></a>
                </div>
                <div className="col social social-twitter">
                    <a href="https://twitter.com/MicahPatrick" target="_blank" rel="noreferrer"
                        onMouseEnter={() => setSocialMessage(messages.twitter)}
                        onMouseLeave={() => setSocialMessage(messages.blank)}
                    ><span>Twitter</span></a>
                </div>
        </div>
        <div className="navWrapper">
                <p>
                    {socialMessage}
                </p>
        </div>
        </>
    )
}