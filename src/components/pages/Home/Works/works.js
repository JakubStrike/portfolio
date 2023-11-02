import React from 'react';
import './works.css';
import Portfolio1 from '../../../../assets/portfolio-1.png';
import Portfolio2 from '../../../../assets/portfolio-2.png';
import { Link } from 'react-router-dom';

const Works = () => {
    return (
        <section id='works'>
            <h2 className="worksTitle">My Portfolio</h2>
            <span className="worksDesc">I take pride in paying attention to the smallest details and making sure that my work is back-end perfect. I am excited to bring my skills and experience to help businesses achieve their goals and create a strong online presence.</span>
            <div className="worksImgs">
                <Link to='/THBanking' target='_blank' rel="noopener noreferrer"><img src={Portfolio1} alt="" className="worksImg" /></Link>
                <img src={Portfolio2} alt="" className="worksImg" />
            </div>
            <button className="workBtn">More Coming Soon!</button>
        </section>
    );
}

export default Works;