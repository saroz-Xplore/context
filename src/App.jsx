import React from 'react'
import Form from './components/Form'
import Greetings from './components/Greetings'


const App = () => {
  return (
    <div style={{
      width: '100vw',
      textAlign: 'center'
    }}>
      <h1>Login</h1>
      <Form />
      <Greetings />
    </div>
  )
}

export default App