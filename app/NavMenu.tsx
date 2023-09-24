import Link from 'next/link';
import Image from 'next/image';
import styles from './NavMenu.module.css';

import React from 'react';

function NavMenu() {
  return (
    <nav className={styles.nav}>
      <Link href="/">
        <Image src="/logo.svg" alt="NextSpace Logo" width={216} height={30} />
      </Link>
      <ul className={styles.links}>
        <li>
          <Link href="/about">About</Link>
        </li>
        <li>
          <Link href="/pricing">Pricing</Link>
        </li>
        <li>
          <Link href="/users">Users</Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavMenu;
