import { useRef, useEffect } from "react";
import React from 'react'
import { Input } from "../input";


export const DomRef = () => {
    const inputRef =useRef<HTMLInputElement>(null!)

    useEffect(() =>{
        inputRef.current?.focus()
    },[])
  return (
    <div>
        <input type='text' ref={inputRef}/>
    </div>
  )
}
