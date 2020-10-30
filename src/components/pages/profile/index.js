import React, { useContext, useState , useEffect, useCallback } from 'react'
import { useHistory , useParams } from 'react-router-dom'
import PageLayout from '../../page-layout'
import Origamis from '../../origamis'
import UserContext from '../../../Context'


const ProfilePage = () => {
    
    const [username , setUsername] = useState(null)
    const [posts , setPost] = useState(null)
    const context = useContext(UserContext)
    const history = useHistory()
    const params = useParams()

const getData = useCallback( async () => {
        const id = params.userid
        const response = await fetch(`http://localhost:9999/api/user?id=${id}`)
    
        if(!response.ok){
            history.push('/error')
        }else {
            const user = await response.json()
            setUsername(user.username)
            setPost(user.posts && user.posts.length)
        }
    },[params.userid , history])

useEffect(() => {

    getData()
    },[getData])

 const logOut = () => {
        context.logOut()
        history.push('/')
    }

  
        if(!username){
            return(
                <PageLayout>
                    <div>Loading...</div>
                </PageLayout>
            )
        }

        return (
            <PageLayout>
                <div>
                <p>User: {username}</p>
                <p>Posts: {posts}</p>

                <button onClick={logOut} >Logout</button>
                </div>
                <Origamis length={3} />
            </PageLayout>
        )
    }


export default ProfilePage