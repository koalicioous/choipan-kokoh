import React from 'react'

export default function Section({props,children}){
    return (
        <div className="row justify-content-center align-items-center mt-3 mb-3">
            {children}
        </div>
    )
}