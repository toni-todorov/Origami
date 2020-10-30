import React, { useContext } from 'react'
import Link from '../link'
import styles from './index.module.css'
import getNavigation from '../utils/navigation'
import UserContext from '../../Context'

const Aside = () => {

const {
    user
} = useContext(UserContext)

const links = getNavigation(user)
return (
    <aside className={styles.container}>
        {
            links.map(navElement => {
                return (
                    <Link key={navElement.title}
                        href={navElement.link}
                        title={navElement.title}
                        type="aside" />
                )
            })
        }
    </aside>
)
    }

export default Aside