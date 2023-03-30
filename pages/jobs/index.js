import JobList from '@/components/jobs/jobList/JobList'
import React from 'react'
import styles from './index.module.css'

const index = () => {
  return (
    <div className=' '>
      <div className="card center flex ">
        <JobList />
        <nav className={ `${styles.sidebar} side-Nav` }>
          <h2 className="heading-secondary">Filter</h2>
          <ul>
            <li>
              <form action="">
                <input type="text" placeholder='search by role'/> <br/>
                <label htmlFor="">Search</label>
              </form>
            </li>
            <li> <h2 className="heading-tertiary"> Location</h2> </li>
            <li> <h2 className="heading-tertiary"> Type</h2> </li>
          </ul>
        </nav>
      </div>
    </div>
  )
}

export default index