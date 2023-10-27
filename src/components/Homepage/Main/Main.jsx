import React from 'react'
import "./Main.css"
import Slider from '/src/assets/Sliders.svg'
// import Products from '../../../Storage/Products.jsx'

export default function Main() {

    return (
        <main>
            <div className='container'>
                <section className='slider'>
                    <img src={Slider} />
                </section>
                <section className='chegirma'>
                    <h2 className='chegirmat' >Акции</h2>
                </section>
                <section className='frame'>
                    {/* <Products /> */}
                </section>
            </div>
        </main>
    )
}
