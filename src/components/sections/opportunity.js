import React from 'react'
import Section from '../Section'
import Card from '../card-item'

import Competition from '../../img/competition.svg'

export default function Opportunity(){
    return (
        <Section>
            <div className="d-flex justify-content-center align-items-center">
                <div className="headline-title my-5 mx-3 text-center">
                    Peluang Bisnis Dimsum dan Choipan
                </div>
            </div>
            <div className="d-flex flex-wrap h-100">
                <div className="col-md-4 flex-grow-1 py-3">
                    <Card
                        title="Minim Kompetitor"
                        content="Perhatikan di sekitar Anda, ada berapa penjual choipan? Jarang sekali kan? Minimnya kompetitor membuat peluangmu dipilih konsumen menjadi lebih besar"
                    />
                </div>
                <div className="col-md-4 flex-grow-1 py-3">
                    <Card
                        title="Set-up Jualan Mudah"
                        content="Berjualan choipan di booth tidak memerlukan training racik-meracik produk karena Anda bisa menghangatkan produk dan menjualnya langsung"
                    />
                </div>
                <div className="col-md-4 flex-grow-1 py-3">
                    <Card
                        title="Produk yang punya manfaat kesehatan"
                        content="Di masa sekarang, produk-produk yang punya manfaat kesehatan seperti yang menggunakan sayuran sebagai bahan baku punya nilai jual lebih di pasaran. Karena itu choipan punya potensi besar untuk eksis di pasar kuliner Indonesia"
                    />
                </div>
            </div>
        </Section>
    )
}