import React from 'react'
import Section from '../Section'

import Card from '../card-item'

export default function Reason()
{
    return (
        <Section>
            <div className="d-flex border-1 flex-wrap">
                <div className="col-md-6 d-flex flex-column justify-content-center align-items-center px-5 border-1">
                    <div className="headline-subtitle font-weight-bold">
                        #ChoipanNusantara
                    </div>
                    <div className="headline-title text-center mt-3">
                        Kenapa Memilih Franchise Dapoer Kokoh?
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="my-3">
                        <Card title="Double Revenue Stream" content="Selain jualan di booth, Anda juga bisa menjual produk dalam kemasan frozen" />
                    </div>
                    <div className="my-3">
                        <Card title="Profit Margin Besar" content="Kami pastikan keuntungan penjualan dari setiap produk yang Anda jual tidak kurang dari 50%" />
                    </div>
                    <div className="my-3">
                        <Card title="Sistem penyediaan bahan baku SANGAT mudah" content="Bahan baku yang disediakan Dapoer Kokoh untuk pemilik franchise dalam bentuk frozen, sehingga memudahkan dalam proses pengiriman dan penyajian" />
                    </div>
                </div>
            </div>
        </Section>
    )
}