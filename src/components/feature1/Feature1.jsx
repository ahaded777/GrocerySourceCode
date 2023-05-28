import React from 'react';
import img1 from '../../assets/feat.png'
import './feature1.css';

function Feature1() {
  return (
    <section className='feature1 section'>
        <div className="feature1__content container grid">
            <div className="feature1__image">
                <img src={img1} className="feature1__img" />
            </div>
            <div className="feature1__text">
                <h3 className='feature1__text-h3'>WHY CHOOSE US</h3>
                <h1 className='feature1__title'>Find Favorites And Discover New Ones</h1>
                <p className="feature1__description">At vero eos et accusamus et iusto odio dignissimos 
                    ducimus blanditiis praesen voluptatum deleniti.
                </p>
                <button className='button button--flex'>Explore Now</button>
            </div>
        </div>
    </section>
  );
}

export default Feature1;
