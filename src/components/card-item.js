import React from 'react'

export default function Card(props){

    if (props.image) {
        return (
            <div className="card shadow-sm flex-grow-1 h-100 scalable bg-light">
                <div className="card-body d-flex flex-column justify-content-around">
                    <img src={props.image} className="image-50 border-1 ml-auto mr-auto h-100" alt="" />
                    <div className="headline-title-2 text-center mb-3">{ props.title }</div>
                    <div className="card-content text-center headline-subtitle-2">{ props.content }</div>
                </div>
            </div>
        )
    }

    return (
        <div className="card shadow-sm flex-grow-1 h-100 scalable bg-light">
            <div className="card-body d-flex flex-column justify-content-around">
                <div className="headline-title-2 text-center mb-3">{ props.title }</div>
                <div className="card-content text-center headline-subtitle-2">{ props.content }</div>
            </div>
        </div>
    )
}