import Link from 'next/link'
import React from 'react'
import styles from './mainNavigation.module.css'

const MainNavigation = () => {
  return (
    <nav className={ `${styles.nav} flex` }>
      <Link href="/" className='link'> <h2 className={ styles.logo }>LOGO</h2> </Link>

      <input type="checkbox" className={ styles.responsiveCheck } name="" id="responsiveNav" />
      <label className={ `${styles.label} flex` } htmlFor="responsiveNav"><span className={ styles.hamburger }></span></label>

      <section className={ `${styles.navigation_list}` }>
        <ul className="list">
          <li className="list_item"> <Link href="/jobs">Job-Listing</Link></li>
          <li className="list_item"><Link href="">Resources</Link></li>
          <li className="list_item"><Link href="">About</Link></li>
        </ul>
        <buttton className="button button-nav">Post a job</buttton>
      </section>
    </nav>
  )
}

export default MainNavigation