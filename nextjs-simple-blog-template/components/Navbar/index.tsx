'use client'
import Link from 'next/link';
import styles from './index.module.css';
import React, { useState } from 'react'

export default function Navbar() {

  const [menuOpen, setMenuOpen] = useState(false)
  return (
    <>
      <nav className={styles.nav}>
        <Link href={'/'} className={styles.navTitle}>Home</Link>
        <div className={styles.ham} onClick={() => setMenuOpen(!menuOpen)}>
          <span className={styles.hamBar}></span>
          <span className={styles.hamBar}></span>
          <span className={styles.hamBar}></span>
        </div>
        <ul className={`${styles.navMenues} ${menuOpen ? styles.open : ""}`}>
          <li className={`${styles.navMenu} ${styles.active}`}><Link href={'/aboutme'}>プロフィール</Link></li>
          <li className={styles.navMenu}><Link href={'/contact'}>お問い合わせ</Link></li>
        </ul>
      </nav>
    </>
  )
}