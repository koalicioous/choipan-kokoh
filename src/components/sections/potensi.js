import React from 'react'
import Section from '../Section'
import Card from '../card-item'

export default function potensi()
{
    return (
        <div className="top-down-border py-3 mb-3">
            <Section>
                <div className="col-md-8 d-flex justify-content-center align-items-center">
                    <div className="headline-title my-4 px-3 text-center">
                    Potensi profit yang bisa Anda dapatkan per bulan: 4,5-10,5 JUTA!
                    </div>
                </div>
                <div className="d-flex flex-wrap h-100">
                    <div className="col-md-4 flex-grow-1 py-3">
                        <Card
                            title="Penjualan Outlet"
                        />
                    </div>
                    <div className="col-md-4 flex-grow-1 py-3">
                        <Card
                            title="Penjualan melalui platform online dan marketplace"
                        />
                    </div>
                    <div className="col-md-4 flex-grow-1 py-3">
                        <Card
                            title="Penjualan frozen pack"
                        />
                    </div>
                </div>
            </Section>
        </div>
    )
}