import './contact.css';
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import cv from '../../../../assets/cv.pdf';

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_w4i3qsq', 'template_1k1ya2t', form.current, 'i-wjXThOASL1QWiaB')
            .then((result) => {
                console.log(result.text);
                e.target.reset();
                alert('Email Sent !');
            }, (error) => {
                console.log(error.text);
            });
    };
    
    return (
        <div id='contactPage'>
            <div id="contact">
                <h1 className="contactPageTitle">Contact Me</h1>
                <span className="contactDesc">Please fill out the form below to discuss any work opportunities.</span><br></br>
                <span className="contactDesc">You can find my <b>CV</b> <a className='cv' href={cv} target='_blank' rel="noopener noreferrer">here</a>.</span>
                <form className="contactForm" ref={form} onSubmit={sendEmail}>
                    <input type="text" className="name" placeholder='Your name' name='user_name' />
                    <input type="text" className="email" placeholder='Your Email' name='user_email' />
                    <textarea rows={5} className='msg' placeholder='Your Message' name="message" ></textarea>
                    <button type="submit" value="Send" className='submitBtn'>Submit</button>
                </form>
            </div>
        </div>
    );
}

export default Contact;