import React from 'react'
import { useContext } from 'react'
import { UserContext } from './UserContext'



export const User = () => {
    const handleLogIn =()=>{}
    const handleLogOut=()=>{}

  return (
    <div>
    <button onClick={handleLogIn}>Log In </button>
    <button onClick={handleLogOut}>Log Out</button>
    <div>User Name Is</div>
    <div>User Email Is</div>
    </div>
  )
}


