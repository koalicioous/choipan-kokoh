import React from 'react'
import Logo from '../img/logo-100.png'

export default function navbar(props)
{
    return (
        <div className="navbar py-3 sticky-top bg-light-navbar">
            <div className="mr-auto d-flex align-items-center">
                <img
                    src={Logo}
                    className="image-50"
                />
                <div className="navbar-brand ml-3">
                    Choipan Dapoer Kokoh
                </div>
            </div>
            <div className="ml-auto d-none d-md-block">
                <a href="https://wa.link/23ruzz" target="_blank" className="btn btn-danger border-2 px-5 font-weight-bold">
                    Jadi Mitra
                </a>
            </div>
        </div>
    )
}