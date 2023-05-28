import React from 'react';
import img1 from '../../assets/service-ic1.svg'
import img2 from '../../assets/service-ic2.svg'
import img3 from '../../assets/service-ic3.svg'
import './services.css';

function Services() {
  return (
    <section className='services section'>
        <h2 className="section__title">Fruit And Vegetable Delivered <br /> To Your Home</h2>
        <span className="section__subtitle">What we Serve</span>
        <div className='services__content container grid'>
            <div className="services__card">
                <img src={img1} className="services__img" />
                <h1 className='services__title'>Free shipping</h1>
                <p className="services__subtitle">Enjoy Order in a hand using the fresness of groceries</p>
            </div>

            <div className="services__card">
                <img src={img2} className="services__img" />
                <h1 className='services__title'>15 days returns</h1>
                <p className="services__subtitle">Order in a handy way using the freshness of the groceries.</p>
            </div>

            <div className="services__card">
                <img src={img3} className="services__img" />
                <h1 className='services__title'>Secure checkout</h1>
                <p className="services__subtitle">If you get rotten items - return immediately to us.</p>
            </div>
        </div>
    </section>
  );
}

export default Services;
