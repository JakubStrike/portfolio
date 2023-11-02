import React from 'react';
import './intro.css';
import bg from '../../../../assets/image.png';
import btnImg from '../../../../assets/hireme.png';
import { Link } from 'react-scroll';

const Intro = () => {
    return (
        <section id="intro">
            <div className="introContent">
                <span className="hello">Hello,</span>
                <span className="introText">I'm <span className="introName">Jakub</span> <br />Software Developer</span>
                <p className="introPara">I am a skilled software developer with experience in creating<br />visually appealing and user friendly applications.</p>
                <Link to='contact' spy={true} smooth={true} offset={-50} duration={500} className="linkDef"><button className="btn"><img src={btnImg} alt="Hire me" className='btnImg'/> Hire Me</button></Link>
              
            </div>
            <div className="introContent2"><img src={bg} alt="Coding guy" className="bg" /></div>
            
        </section>
    );
}

export default Intro;