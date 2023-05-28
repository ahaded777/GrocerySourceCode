import React from 'react';
import img1 from '../../assets/feat2.png'
import './feature2.css';

function Feature2() {
  return (
    <section className='feature2 section'>
        <div className="feature2__content container grid">
            <div className="feature2__text">
                <h3 className='feature2__text-h3'>HOME DELIVERY</h3>
                <h1 className='feature2__title'>Sit At Home We Will Take Care Your Order</h1>
                <p className="feature2__description">At vero eos et accusamus et iusto odio
                    dignissimos ducimus qui blanditiis praesentium voluptatum deleniti a
                    tque corrupti quos
                </p>
                <button className='button button--flex'>Explore Now</button>
            </div>
            <div className="feature2__image">
                <img src={img1} className="feature2__img" />
            </div>
        </div>
    </section>
  );
}

export default Feature2;
