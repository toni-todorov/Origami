import React from 'react'
import Header from "../header"
import style from './index.module.css'
import Aside from '../aside'
import Footer from '../footer'

const PageLayout = (props) => {
    return (
        <div className={style.app}>
            <Header />
            <div className={style.container}>
                <Aside />
                <div className={style['inner-container']}>
                    {props.children}
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default PageLayout
