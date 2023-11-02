import React from 'react';
import './skills.css';
import TickBox from '../../../../assets/tickbox.png';

const Skills = () => {
    return (
        <section id='skills'>
            <span className="skillTitle">What I do</span>
            <span className="skillDesc">I am a skilled and passionate software developer with experience in creating visually appealing and user-friendly applications. I have a strong understanding of design and a keen eye for detail. I am proficient in <b className='boldDesc'>HTML, CSS, JavaScript, PHP, JAVA and SQL.</b></span>
            <div className="skillBars">
                <div className="skillBar">
                    <img src={TickBox} alt="TickBox" className="skillBarImg" />
                    <div className="skillBarText">
                        <h2>Data structures and algorithms</h2>
                        <p>This is a demo text, you can write your own content here.</p>
                    </div>
                </div>
                <div className="skillBar">
                    <img src={TickBox} alt="TickBox" className="skillBarImg" />
                    <div className="skillBarText">
                        <h2>Software engineering</h2>
                        <p>This demo text can be changed while making the production ready website.</p>
                    </div>
                </div>
                <div className="skillBar">
                    <img src={TickBox} alt="TickBox" className="skillBarImg" />
                    <div className="skillBarText">
                        <h2>Development operations</h2>
                        <p>You can write text related to mobile app development.</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Skills;