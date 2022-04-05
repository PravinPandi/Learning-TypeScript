import React from 'react'
import { useState } from 'react'

type AuthUser ={
    name: string,
    email: string
}

export const User = () => {
  const [user, setUser] = useState<AuthUser>({}as AuthUser)
    const handleLogIn =() =>{
        setUser({
            name: 'pravin',
            email: 'prp@gmail.com',
        })
    }

    return (
    <div>
        <button onClick={handleLogIn}>log in</button>
        <div>User Name is {user?.name}</div>
        <div>User Email is{user?.email }</div>
    </div>
  )
}
