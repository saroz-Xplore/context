import React, { useContext } from 'react'
import UserContext from '../context/UserContext'

const Greetings = () => {

  const { user, patanBoy } = useContext(UserContext)

  if (!user) return (
    <div style={{
      marginTop: "20px"
    }}>
      Please Provide Username
    </div>
  )

  return (
    <div style={{
      marginTop: "20px"
    }}>
      Namaste {user} from {patanBoy}
    </div>
  )
}

export default Greetings