import styles from '../styles/Nav.module.css';
import Link from 'next/link';

export default function Nav() {
    return (
        <nav className="menu">
            <ul className={styles.header__links}>
                <li className={styles.header__link}><Link href='/'>Home</Link></li>
                <li className={styles.header__link}><Link href='/stokist'>Stokist</Link></li>
            </ul>
        </nav>
    )
}