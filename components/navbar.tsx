import Link from 'next/link';
import React from 'react';
import Image from 'next/image';

const Navbar = () => {

    return (
        <div className='navbar'>
                <ul className='navbar-list'>
                    <li>
                    <Link href="/"> <Image alt="sunflower" src="/sunflower.png" width="28"/> </Link>
                    </li>
                    <Link className="title-hover" href="/timeline"> timeline </Link>
                    <li>
                    <Link className="title-hover" href="/connections"> connections </Link>
                    </li>
                    <Link  className="title-hover" href="/wordle"> wordle </Link>
                    <li>
                        
                    </li>
                </ul>
        </div>

    );

};

export default Navbar;