import React from 'react'
import Section from '../Section'
import Card from '../franchise-item'

import Franchise1 from '../../img/franchise-1.jpg'
import Franchise2 from '../../img/franchise-2.jpg'
import Franchise3 from '../../img/franchise-3.jpg'

export default function franchise(){
    return (
        <Section>
            <div className="d-flex flex-wrap text-center justify-content-center align-items-center">
                <div>
                    <div className="headline-title mt-5">
                        Paket Franchise
                    </div>
                    <div className="headline-subtitle mb-5">
                        Berbagai pilihan paket investasi untuk Anda!
                    </div>
                </div>
            </div>
            <div className="col-md-12 d-flex flex-wrap h-100">
                <div className="col-md-4 flex-grow-1 py-3">
                    <Card
                        image={Franchise1}
                        title="Paket Juragan"
                        investasi="5.9 Juta"
                        benefits={['Paket jualan lengkap','Support materi marketing', 'Booth Portable']}
                    />
                </div>
                <div className="col-md-4 flex-grow-1 py-3">
                    <Card
                        image={Franchise2}
                        title="Paket Bossman"
                        investasi="11.9 Juta"
                        benefits={['Paket jualan lengkap','Support materi marketing', 'Booth semi-premium', 'Social Media Ads', 'Subsidi Pengiriman']}
                    />
                </div>
                <div className="col-md-4 flex-grow-1 py-3">
                    <Card
                        image={Franchise3}
                        title="Paket Sultan"
                        investasi="14.9 Juta"
                        benefits={['Paket jualan lengkap','Support materi marketing', 'Booth Premium','Budget endorsement foodies','Budget social media ads', 'Free pengiriman']}
                    />
                </div>
            </div>
        </Section>
    )
}