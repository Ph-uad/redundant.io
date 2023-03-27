import React from 'react'
import MainNavigation from '../main_navigation/MainNavigation'

const Layout = (props) => {
    return (
        <>
            <MainNavigation />
            <main className="main">{ props.children}</main>
        </>
    )
}

export default Layout;