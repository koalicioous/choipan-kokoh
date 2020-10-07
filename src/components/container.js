import React from 'react';
import Navbar from './navbar'

export default function container({children})
{
    return (
        <div className="container">
            <Navbar />
            { children }
        </div>
    )
}