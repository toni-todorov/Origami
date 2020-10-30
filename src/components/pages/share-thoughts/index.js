import React, { useState } from 'react'
import styles from './index.module.css'
import PageLayout from '../../page-layout'
import Title from '../../title'
import SubmitButton from '../../button/submit-button'
import Origamis from '../../origamis'
import getCookie from '../../utils/cookie'

const ShareThoughtsPage = () => {

  const [description, setDescription] = useState('')
  const [updatedOrigami, setUpdatedOrigami] = useState([])
  
  const handleSubmit = async (event) => {
    event.preventDefault()

    await fetch('http://localhost:9999/api/origami', {
      method: 'POST',
      body: JSON.stringify({description}),
      headers: {
        'Content-type': 'application/json' , 
        'Authorization': getCookie('x-auth-token')
      }
    }) 
    
    setDescription('')
    setUpdatedOrigami([...updatedOrigami , 1])
    
  }

return (
  <PageLayout>
    <Title title="Share your thoughts..." />
    <div className={styles.container}>
      <div>
        <textarea value={description} className={styles.textarea} onChange={e => setDescription(e.target.value)}></textarea>
      </div>
      <div>
        <SubmitButton title='Post' onClick={handleSubmit} />
      </div>
    </div>
    <Origamis length={3} updatedOrigami={updatedOrigami} />
  </PageLayout>
)
}

export default ShareThoughtsPage