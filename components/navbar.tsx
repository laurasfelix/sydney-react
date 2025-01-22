import React from 'react';

const Navbar = () => {

    return (
        <div className='navbar'>
                <ul className='navbar-list'>
                    <li>
                    <a href="/"> <img src="/sunflower.png" width="28px" height="auto"/> </a>
                    </li>
                    <a href="/timeline"> timeline </a>
                    <li>
                    <a href="/connections"> connections </a>
                    </li>
                    <a href="/wordle"> wordle </a>
                    <li>
                        
                    </li>
                </ul>
        </div>

    );

};

export default Navbar;