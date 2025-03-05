import React, { useState } from 'react'
import UserContext from './UserContext'

const UserContextProvider = ({ children }) => {

  const [user, setUser] = useState('')
  const patanBoy = 'Saroj'
  return (
    <UserContext.Provider value={{ user, setUser, patanBoy }}>
      {children}
    </UserContext.Provider>
  )
}

export default UserContextProvider