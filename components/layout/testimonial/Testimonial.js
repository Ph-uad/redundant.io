import React from 'react'
import styles from './testimonial.module.css'

const Testimonial = () => {

    // const options = {
    //     method: 'GET',
    //     headers: {
    //         'Content-Type': 'application/json',
    //         'X-RapidAPI-Key': '7456400200msh7ebe132b4cc6d0fp1cc549jsne3d80fcbb82f',
    //         'X-RapidAPI-Host': 'arbeitnow-free-job-board.p.rapidapi.com'
    //     }
    // };

    // const response = await fetch('https://arbeitnow-free-job-board.p.rapidapi.com/api/job-board-api', options)
    //     .then(response => response.json())
    //     .then(response => console.log(response))
    //     .catch(err => console.error(err));

    // console.log(response);


    return (
        <div className={styles.testimonial}>
            <div className={ `${styles.post_jobs} flex container` }>
                <div className={ styles['post_jobs-detail'] }>
                    <h2 className="heading-secondary">Join companies that use <span className="lowercase"><bold>redundant</bold>.<i>io</i></span> to build their remote teams</h2>
                    <p className="paragraph">Hiring is the most important thing you do. If you're hiring remotely, we would love to help you find the right talent for your team.</p>
                    <button className="button-nav button">POST A JOB</button>
                </div>
                <div className={`right ${styles.icons} `}>
                    <h1>ICONS</h1>
                </div>
            </div>
            <div className={ `container` }>
                <div className={ `${styles.quote} right` } >
                    <q className='quote'>global opportunities is one of the ways to unify a world full of diverse talents.</q>
                    <h6 className="italic">Phil. Japa Styles</h6>
                </div>
            </div>

        </div>
    )
}

export default Testimonial