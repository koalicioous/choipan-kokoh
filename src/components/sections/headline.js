import React from 'react'
import Section from '../Section'
import HeadlineImage from '../../img/headline-image.webp'

export default function Headline(){
    return (
        <Section>
            <div className="col-md-5 py-5 pl-5">
                <div className="headline-title">
                    Jadi pionir sekarang, dapatkan 10 Juta/Bulan
                </div>
                <div className="headline-subtitle pr-3 my-3">
                    Dimsum asli Kalimantan yang asli enak! Bisa bikin <b>balik modal dalam 1 bulan aja!</b>
                </div>
                <div className="headline-action my-3">
                    <a href="https://wa.link/23ruzz" target="_blank" className="btn btn-danger py-3 px-5 border-2 my-3 font-weight-bold">
                        Informasi Kemitraan
                    </a>
                </div>
            </div>
            <div className="col-md-7 px-3">
                <img src={HeadlineImage} alt="" className="border-1 image-100" />
            </div>
        </Section>
    )
}