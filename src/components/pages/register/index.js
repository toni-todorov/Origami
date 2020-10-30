import React, { useState , useContext } from 'react'
import Title from '../../title'
import SubmitButton from '../../button/submit-button'
import styles from './index.module.css'
import PageLayout from '../../page-layout/index'
import Input from '../../input'
import authenticate from '../../utils/authenticate'
import UserContext from '../../../Context'
import { useHistory } from 'react-router-dom'

const RegisterPage = () => {
    
    const [username , setUsername] = useState('')
    const [password , setPassword] = useState('')
    const [rePassword , setRePassord] = useState('')
    const context = useContext(UserContext)
    const history = useHistory()

const handleSubmit = async (event) => {
        event.preventDefault()

        if ( rePassword && (password !== rePassword)){
            return console.log('Please check rePassword')
        } 
    
        await authenticate('http://localhost:9999/api/user/register',
        {
            username,
            password,
            rePassword
        },
        (user) => {
            context.logIn(user)
            history.push('/')
        },
        (e) => {
            console.log('Error message', e);
        }
    )

    }

        return (
            <PageLayout>
                <form className={styles.container} onSubmit={handleSubmit}>
                    <Title title='Register' />
                    <Input
                        value={username}
                        onChange={e => setUsername(e.target.value)}
                        label='Username'
                        id='username'
                    />
                    <Input
                        type='password'
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        label='Password'
                        id='password'
                    />
                    <Input
                        type='password'
                        value={rePassword}
                        onChange={e => setRePassord(e.target.value)}
                        label='Re-Password'
                        id='re-password'
                    />
                    <SubmitButton title='Register' />
                </form>
            </PageLayout>
        )
    }


export default RegisterPage