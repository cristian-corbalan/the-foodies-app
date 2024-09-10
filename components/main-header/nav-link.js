'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import classes from './nav-link.module.css';

export default function NavLink ({ href, children }) {
  const pathname = usePathname();
  return (<Link className={`${classes.link} ${pathname.startsWith(href) && classes.active}`} href={href}>{children}</Link>);
}
