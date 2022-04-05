import { type } from '@testing-library/user-event/dist/type'
import React from 'react'


type horizontalPosition='left' |'center'| 'right' 
type verticalPosition='top' | 'center' | 'bottom'

type ToastProps={
    position : `${horizontalPosition}-${verticalPosition}`
}


export const Toast = ({position} : ToastProps) => {
  return (
    <div>Toast Notification Position - {position}</div>
  )
}
