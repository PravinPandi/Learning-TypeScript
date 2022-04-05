import React, { Component } from 'react'

type RandomNumberType ={
    value : number
}

type positiveNumber = RandomNumberType & {
    isPositive : boolean
    isNegative?: never
    isZero?: never
}

type negativeNumber = RandomNumberType & {
    isNegative : boolean
    isPositive:never
    isZero?: never
}

type zero = RandomNumberType &{
    isNegative?: never
    isPositive?: never
    isZero : boolean
}


type RandomNumProps =positiveNumber | negativeNumber |zero 

export const RandomNumber =({
    value,
    isPositive,
    isNegative,
    isZero,
}: RandomNumProps) =>{
    return(
        <div>
            {value} {isPositive && 'positive'} {isNegative && 'negative'}{' '}
            {isZero && 'zero'}
        </div>
    )
}