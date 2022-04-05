import React from 'react'

type GreetProps ={
  name: string
  email: string
  msg : number
  IsActive : boolean
}

export default function greet(props : GreetProps) {
  return (
    <div>
       <h1>
        {
          props.IsActive ? `hello ${props.name} you're mailId ${props.email} have ${props.msg} unread msgs `
          : `Offline` 
        }    
        </h1>
           </div>
  )
}
