import styles from './header.module.scss';
import cn from 'classnames';
import { Logo } from '../logo';
import Link from 'next/link';

const Header: React.FC = () => {
  return (
    <header className="container">
      <div className={styles.header}>
        <Link href="/" passHref>
          <a className={styles.logo}>
            <Logo includeText />
          </a>
        </Link>
        <nav className={styles.navbar}>
          <ul className={styles.navbar__list}>
            <li className={cn(styles.navbar__item, styles.navbar__item_link)}>
              <Link href="#why-midas">Why Midas</Link>
            </li>
            <li className={cn(styles.navbar__item, styles.navbar__item_link)}>
              <Link href="#about-us">About Us</Link>
            </li>
            <li className={cn(styles.navbar__item, styles.navbar__item_button)}>
              <Link href="#contact">Contact</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
