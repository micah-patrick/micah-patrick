import React from 'react';
import Avatar from '../layout/Avatar';
import HomeHeader from './HomeHeader';
import Menu from '../layout/Menu';
import Social from '../layout/Social';
import Name from '../layout/Name';

export default function Home(){
    return (
        <>
        <div className="justify-content-center">
            <HomeHeader />
            <Avatar />
            <Name />
            <div className="navWrapper">
                <hr />
            </div>
            <Menu />
            <Social />
        </div>
        </>
    )
}