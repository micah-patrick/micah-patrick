import React from 'react';
import { Link } from 'react-router-dom';

export default function Name() {
    return (    
        <div className="navWrapper">
            <Link to="/" id="logo">
                <h1>Micah <span className="parenthesis">(</span>Patrick<span className="parenthesis">)</span> Brown</h1>
            </Link>
        </div>
    )
}