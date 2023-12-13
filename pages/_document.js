import { Html, Head, Main, NextScript } from 'next/document'
import React from 'react'

export default function Document() {
  return (
    <Html className='scroll-smooth' style={{scrollBehavior:'smooth'}} >
 <link rel="preconnect" href="https://fonts.googleapis.com"/>
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
<link href="https://fonts.googleapis.com/css2?family=Averia+Sans+Libre:wght@300&family=Averia+Serif+Libre:wght@300&family=Pattaya&display=swap" rel="stylesheet" />
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.9.1/gsap.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.9.1/ScrollToPlugin.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/swiper@9/swiper-element-bundle.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/chart.js@3.5.1"></script>

    <Head/>              
      <body className='scroll-smooth' style={{scrollBehavior:'smooth'}}>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}