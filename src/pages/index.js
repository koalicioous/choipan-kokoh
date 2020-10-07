import React from 'react';
import Container from '../components/container'
import '../styles/app.css';
import 'bootstrap/dist/css/bootstrap.css';
import { Helmet } from 'react-helmet'

import Headline from '../components/sections/headline';
import Opportunity from '../components/sections/opportunity';
import Reason from '../components/sections/reason'
import Potensi from '../components/sections/potensi'
import Product from '../components/sections/product'
import Franchise from '../components/sections/franchise'
import Footer from '../components/sections/bottom-cta'

import Favicon from '../../static/favicon.ico'

import Banner1 from '../img/banner-1.webp'



export default function Home() {
  return (
    <Container>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Choipan Dapoer Kokoh - Franchise Laris</title>
        <meta name="description" 
        content="Franchise Choipan khas Pontianak bareng Dapoer Kokoh! Balik dalam 1 bulan aja!"/>
        <link rel="icon" href={Favicon} />
      </Helmet>
      <Headline />
      <Opportunity />
      <img src={Banner1} alt="" className="my-5 border-1 image-100" />
      <Reason />
      <Potensi />
      <Product />
      <Franchise />
      <Footer />
    </Container>
  )
}
