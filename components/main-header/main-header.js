import MainHeaderBackground from '@/components/main-header/main-header-background';
import NavLink from '@/components/main-header/nav-link';
import Image from 'next/image';
import Link from 'next/link';

import logoImg from '@/assets/logo.png';
import classes from './main-header.module.css';

export default function MainHeader () {
  return (
    <>
      <MainHeaderBackground />
      <header className={classes.header}>
        <Link className={classes.logo} href="/public">
          <Image src={logoImg} alt="A plate with food on it" priority />
          NextLevel Food
        </Link>

        <nav className={classes.nav}>
          <ul>
            <li><NavLink href="/meals">Browse Meals</NavLink></li>
            <li><NavLink href="/community">Foodies community</NavLink></li>
          </ul>
        </nav>
      </header>
    </>
  );
}
