import React from 'react'
import { Authenticator } from '@aws-amplify/ui-react';

function Login() {
  return (
    <div>
    <Authenticator socialProviders={['amazon', 'apple', 'facebook', 'google']}>
    {({ signOut, user }) => (
      <main>
        <h1>Hello {user.username}</h1>
        <button onClick={signOut}>Sign out</button>
      </main>
    )}
  </Authenticator>
    </div>
  )
}

export default Login
