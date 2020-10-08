import React from 'react'

export default function Bottom(){
    return (
        <div>
            <div className="d-flex flex-wrap flex-column justify-content-center align-items-center bg-orange py-5 border-1">
                <div className="headline-title text-dark">
                    PROMO SPESIAL!!!
                </div>
                <div className="headline-subtitle text-dark col-md-6 text-center">
                    Dapatkan harga promo Paket Juragan 3.9 Juta Rupiah khusus untuk 10 mitra pertama!!!
                </div>
                <div className="my-3">
                    <a href="https://wa.link/23ruzz" target="_blank" className="btn btn-dark border-2 py-3 px-5 font-weight-bold">
                        Info Lebih Lanjut, Klik di Sini!
                    </a>
                </div>
            </div>
            <div className="my-2 text-center">
                <small>Crafted with ❤ in Yogyakarta by Gila Closing Group</small>
            </div>
        </div>
    )
}