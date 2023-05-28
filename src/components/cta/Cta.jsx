import React from 'react';
import img1 from '../../assets/mobile.svg'
import img2 from '../../assets/apple.svg'
import img3 from '../../assets/playstore.svg'
import './cta.css';

function Cta() {
  return (
    <section className='cta section'>
        <div className="cta__content container grid">
            <div className="cta__image">
                <img src={img1} className="cta__img" />
            </div>
            <div className="cta__text">
                <h3 className='cta__text-h3'>Download our app</h3>
                <h1 className='cta__title'>Get The Groceries App Order More Easily.</h1>
                <p className="cta__description">Lorem ipsum dolor sit amet, consectetur 
                    adipiscing elit, sed do eiusmod tempor incididunt ut.
                </p>
                <div className='cta__image-app'>
                    <div className='cta__image-text'>
                        <img src={img2}  className="cta__img-app" />
                        <h1>App Store</h1>
                    </div>
                    <div className='cta__image-text'>
                        <img src={img3}  className="cta__img-app" />
                        <h1>Play Store</h1>
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
}

export default Cta;
