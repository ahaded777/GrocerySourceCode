import React from 'react';
import img1 from '../../assets/logo.svg'
import "./footer.css";

function Footer(){

    return (
        <section className='footer section container grid'>
            <div className="footer__content">
                <div className="footer__image">
                    <img className='footer__img' src={img1} />
                    <p className="footer__text-p">A new way to moke the paymants 
                        <br /> easy, reliable and secure.
                    </p>
                </div>

                <div className="footer__text">
                    <h1 className='footer__text-h1'>Company</h1>
                    <a href="#"><h3>About</h3></a>
                    <a href="#"><h3>Blog</h3></a>
                    <a href="#"><h3>All Products</h3></a>
                    <a href="#"><h3>Locations Map</h3></a>
                </div>

                <div className="footer__text">
                    <h1 className='footer__text-h1'>Services</h1>
                    <a href="#"><h3>Order tracking</h3></a>
                    <a href="#"><h3>Wish List</h3></a>
                    <a href="#"><h3>My account</h3></a>
                    <a href="#"><h3>Terms & Conditions</h3></a>
                </div>

                <div className="footer__text">
                    <h1 className='footer__text-h1'>Get in Touch</h1>
                    <a href="#"><h3 className='footer__text-h3'>Subscribe to our weekly Newsletter and receive updates via email.</h3></a>
                </div>
            </div>
            <div className="footer__all">
                <h1 className='footer__all-h1'>All rigths reserved @ Crypticalcoder 2022</h1>
                <div className='footer__icon'>
                    <a href="#"><i class='bx bxl-instagram footer__icon-link'></i></a>
                    <a href="#"><i class='bx bxl-facebook-circle footer__icon-link' ></i></a>
                    <a href="#"><i class='bx bxl-twitter footer__icon-link' ></i></a>
                    <a href="#"><i class='bx bxl-linkedin-square footer__icon-link' ></i></a>
                </div>
            </div>
        </section>
    )
}

export default Footer;