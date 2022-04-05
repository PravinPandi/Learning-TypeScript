import React from 'react'
import { useContext } from 'react'
import { ThemeContext } from './ThemeContxt'

export const Box = () => {

    const theme =useContext(ThemeContext)
  return (
    <div style={{backgroundColor: theme.primary.main, color : theme.primary.text}}>Theme Content</div>
  )
}