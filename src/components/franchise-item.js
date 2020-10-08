import React from 'react'

export default function Card(props){

    return (
        <div className="card shadow-sm flex-grow-1 h-100 scalable">
            <div className="card-body d-flex flex-column h-100 justify-content-end">
                <div className="headline-title-2 text-center my-3">{ props.title }</div>
                <img src={props.image} className="image-100s border-1 h-100" alt="" />
                <div className="card-content mt-5">
                    <ul className="benefit-list">
                        {props.benefits.map((item) => (
                            <li key={item}>{item}</li>
                        ))}
                    </ul>
                </div>
                <div className="headline-title text-center mb-3">
                    <span><small>Rp</small></span>{props.investasi}
                </div>
                <div>
                    <a href={props.link} target="_blank" className="btn btn-outline-danger border-2 btn-block font-weight-bold">
                        Pesan
                    </a>
                </div>
            </div>
        </div>
    )
}