//creating a navbar component

import Link from 'next/link';
import styles from '../styles/Navbar.module.scss';

export default function Navbar() {

    return(
        <nav className={styles.navbar}>
             <div>
                <Link href="/">Home</Link>
             </div>

             <div>
                <Link href="/dates">Dates</Link>
             </div>

             <div>
                <Link href="/timeline">Timeline</Link>
             </div>

             <div>
                <Link href="/mkq">Quiz</Link>
             </div>

             <div>
                <Link href="/gallery">Gallery</Link>
             </div>

        </nav>
    )
}