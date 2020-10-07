import React from 'react'
import Section from '../section'

import Dimsum from '../../img/dimsum.webp'
import Choipan from '../../img/choipan.webp'

export default function products(){
    return (
        <div className="bg-light py-3 px-3 border-1">
            <Section>
                <div className="col-md-12 row justify-content-center mb-5">
                    <div className="headline-title">
                        Produk Kami
                    </div>
                </div>
                <div className="col-md-12 row justify-content-center align-items-center">
                    <div className="col-md-7">
                        <img
                            src={Choipan}
                            alt=""
                            className="border-1 image-100"
                        />
                    </div>
                    <div className="col-md-5">
                        <div className="headline-title-2 my-2">
                            Choipan
                        </div>
                        <p>
                        Choipan khas Pontianak dengan isian bengkoang dan ebi yang pastinya punya segudang manfaat untuk kesehatan karena kandungan serat yang tinggi serta berbagai vitamin dan mineral seperti vitamin C, vitamin B6, protein, karbohidrat dan air. Produk ini juga cocok dikonsumsi untuk konsumen yang mengaplikasikan gaya hidup sehat atau dalam program penurunan berat badan.
                        <br/><br/>
                        Choipan kami makin lengkap dinikmati dengan saos asam pedas yang khas dan taburan bawang putih goreng yang membuat aroma Choipan Dapoer Kokoh semakin mengundang selera pelanggan.
                        </p>
                        <div className="mt-3">
                            <button className="btn btn-danger py-2 px-5 border-2 font-weight-bold">
                                Cobain Choipan
                            </button>
                        </div>
                    </div>
                </div>
                <div className="col-md-12 row justify-content-center mt-5 align-items-center">
                    <div className="col-md-5">
                        <div className="headline-title-2 my-3">
                            Dimsum
                        </div>
                        <p>
                        Siapa yang tidak kenal jajanan yang satu ini? Gurihnya daging dan lembutnya tekstur dimsum membuatnya memiliki fans dan pangsa pasar yang besar. Selain itu, rasanya yang familiar dan saos yang menjadi pelengkapnya membuat dimsum semakin digemari.
                        </p>
                        <div>
                            <button className="btn btn-danger py-2 px-5 border-2 font-weight-bold mt-3">
                                Cobain Dimsum
                            </button>
                        </div>
                    </div>
                    <div className="col-md-7 mt-3">
                        <img
                            src={Dimsum}
                            alt=""
                            className="border-1 image-100"
                        />
                    </div>
                </div>
            </Section>
        </div>
    )
}