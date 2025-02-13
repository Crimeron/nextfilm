import React from 'react'

import Link from 'next/link'
import styles from './styles.module.css'

function Footer() {
  return (
    <footer className={styles.footer}>
      Made by&nbsp;
      <Link href="/" >
        Emirhan Gungor
      </Link>
    </footer>
  );
}

export { Footer };