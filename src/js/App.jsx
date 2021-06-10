import React from 'react'

export const App = () => {

    //logic here
    const isHappy = false;

    const element = isHappy 
    ? <h1>Bonjour, tu es content</h1> 
    : <h1>Bonjour, tu n'es pas content</h1>

    return (
        element
    )
}