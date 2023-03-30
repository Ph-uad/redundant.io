import Link from 'next/link'
import JobList from '../../jobs/jobList/JobList'

const Preview = () => {
    return (
        <>
            <div className="container">
                <div className="flex flex-center">
                    <div className="width-min">
                        <h2 className="heading-secondary">Available Spots</h2>
                        <p>Browse and apply to the best new remote jobs at leading remote companies and startups for free. No account or sign-up required. Updated daily.</p>
                    </div>
                    <Link href="/jobs"><span>Find More &rarr;</span></Link>
                </div>
                <JobList />
            </div>
        </>

    )
}

export default Preview