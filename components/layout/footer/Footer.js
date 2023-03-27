import React from 'react'

const Footer = () => {
    return (
        <footer className='background-invert footer'>
            <div className="container flex ">
                <section>
                    <h6 className="heading-senary">Remote Jobs by role</h6>
                    <ul className="list">
                        <li className="list_item"> Customer Support Jobs</li>
                        <li className="list_item">Customer support </li>
                        <li className="list_item">Engineering Jobs</li>
                        <li className="list_item">Marketing Jobs</li>
                        <li className="list_item">Design Jobs</li>
                        <li className="list_item">Operations Jobs</li>
                        <li className="list_item">Product Jobs</li>
                        <li className="list_item">Sales Jobs</li>
                    </ul>
                </section>
                <section>
                    <h6 className="heading-senary"> REMOTE JOBS</h6>
                    <ul className="list">
                        <li className="list_item">All Remote Jobs </li>
                        <li className="list_item">Hiring? Post a Job</li>
                    </ul>
                </section>
                <section>
                    <h6 className="heading-senary">Work Type</h6>
                    <ul className="list">
                        <li className="list_item">Internship</li>
                        <li className="list_item">Part Times</li>
                        <li className="list_item">Full-Time</li>
                        <li className="list_item">Contract Jobs</li>

                    </ul>
                </section>
                <section>
                    <h6 className="heading-senary">Credits</h6>
                    <ul className="list">
                        <li className="list_item">Developer: Phuad Adebowale</li>
                    </ul>
                </section>
            </div>
        </footer>
    )
}

export default Footer