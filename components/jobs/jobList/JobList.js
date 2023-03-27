import React from 'react'
import styles from './job.module.css'

const jobs = [
    {
        id: 'm1',
        company: 'Google',
        location: 'Mountain View, CA',
        logo: 'https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png',
        description: 'Join the team building the world\'s most advanced search engine.',
        title: 'Software Engineer',
        closingDate: '2023-04-01',
    },
    {
        id: 'm2',
        company: 'Marriott International',
        location: 'Mountain View, CA',
        logo: 'https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png',
        description: 'Join the team building the world\'s most advanced search engine.',
        title: 'Lorem Lorem',
        closingDate: '2023-04-01',
    },
    {
        id: 1,
        company: 'Google',
        logo: 'https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png',
        title: 'Software Engineer',
        location: 'Mountain View, CA',
        description: 'Develop, test, and deploy software applications and systems. Collaborate with cross-functional teams to identify and prioritize features and requirements.',
        closingDate: '2023-04-01',
    },
    {
        id: 2,
        company: 'Microsoft',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Microsoft_logo_%281987%29.svg/1000px-Microsoft_logo_%281987%29.svg.png',
        title: 'Data Analyst',
        location: 'Redmond, WA',
        description: 'Collect, analyze, and interpret complex data sets using statistical techniques. Communicate insights and recommendations to stakeholders.',
        closingDate: '2023-04-05',
    },
    {
        id: 3,
        company: 'Amazon',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg',
        title: 'Product Manager',
        location: 'Seattle, WA',
        description: 'Define product vision and strategy, gather and prioritize requirements, and work with engineering, design, and other teams to build and launch new products and features.',
        closingDate: '2023-04-10',
    },
    {
        id: 4,
        company: 'Amazon',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg',
        title: 'Product Manager',
        location: 'Seattle, WA',
        description: 'Define product vision and strategy, gather and prioritize requirements, and work with engineering, design, and other teams to build and launch new products and features.',
        closingDate: '2023-04-10',
    },

];

const JobList = () => {
    return (
        <div className={ styles.job }>
            <div className="container">
                <div className="flex">
                    <div className="width-min">
                        <h2 className="heading-secondary">Available Spots</h2>
                        <p>Browse and apply to the best new remote jobs at leading remote companies and startups for free. No account or sign-up required. Updated daily.</p>
                    </div>
                    <span>Find More &rarr;</span>

                </div>
                <ul className={`${styles.list} list` }>
                    {
                        jobs.map(job => {
                            return (
                                <li className={ `${styles.item} list_item flex` } key={ job.id }>
                                    <div className={styles.logo}>
                                        <figure className="figure">
                                            <img src={ job.logo } alt="" fill="true" className="logo" />
                                        </figure>
                                        <i className="">{ job.location }</i>
                                    </div>
                                    <div className={styles.detail}>
                                        <h3 className="heading-tertiary">{ job.company } </h3>
                                        <h2 className="heading-subsection">{ job.title } </h2>
                                        <p className={ `${styles.description}` }>{ job.description }</p>
                                    </div>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        </div>
    )
}

export default JobList