
import Image from 'next/image';
import classes from './header.module.css'

export const Header = () => {
    return (
        <header className={classes.header}>
            <div className="container flex">
                <div className={classes.detail}>
                    <h1 className="heading-primary">Remote Internship</h1>
                    <h3 className="heading-tertiary">Work with professionals to build you career to greater heights. </h3>
                    <button className="button button-primary">Find openings</button>
                    <button className="button button-secondary">Take a tour</button>
                </div>
                <div className={classes.media}>
                    {/* <figure className="figure"> */}
                        <Image src='/img/hero.png' fill={true} priority={true} className="image" sizes='' alt='Hero-image' />
                    {/* </figure> */}
                </div>
            </div>
        </header>
    )
}
