import React from 'react';
// import { Link } from 'react-router-dom';
import Avatar from '../layout/Avatar';
// import HomeHeader from './HomeHeader';
import Menu from '../layout/Menu';
import Name from '../layout/Name';
// import Social from '../layout/Social';

export default function Header() {


    return(
        <> 
            <div className="headerStrip"></div>
            <div className="container-fluid container-md">
                <div className="header row flex-column flex-md-row">
                    <div className="col order-md-1" >
                        <Name />
                    </div>
                    <div className="col order-md-3">
                        <Menu />
                    </div>
                    <div className="col order-md-2" >
                        <Avatar />
                    </div>
                </div>
            </div>
        </>
    )
}