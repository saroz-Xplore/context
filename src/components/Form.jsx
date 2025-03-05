import React, { useContext, useState } from 'react'
import UserContext from '../context/UserContext'

const Form = () => {

  const { setUser } = useContext(UserContext)
  const [username, setUsername] = useState('')
  console.log(username

  )

  const handleSubmit = () => {
    setUser(username)
  }

  return (
    <div style={{
      display: "flex",
      flexDirection: 'column',
      width: '200px',
      gap: '8px',
      marginLeft: 'auto',
      marginRight: 'auto'


    }}>
      <input
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        style={{
          padding: '6px'
        }}
        type='text'
        placeholder='User'
      />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  )
}

export default Form