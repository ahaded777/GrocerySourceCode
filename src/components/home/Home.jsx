import React from 'react';
import img1 from '../../assets/home-img.png'
import './home.css';

function Home() {
  return (
    <section className='home section'>
        <div className=" home__content container grid">
            <div className="home__box">
                <h1 className="home__title">
                    Groceries delivered in as little as <span>2 hours</span>
                </h1>
                <p className='home__description'>
                    Grocen atssures fresh
                    grocery every morning to your
                    family without getting out in 
                    this pandemic.
                </p>
                <button className="button button--flex">Order Now</button>
            </div>
            <div className="home__image">
                <img src={img1} className="home__img" />
            </div>
        </div>
        
    </section>
  );
}

export default Home;
