import React, { useState } from 'react';
import aboutImg from '../../images/about.png';
import experience from '../../images/Experience.png';
import prototyping from '../../images/Prototyping.png';
import illustration from '../../images/Illustrating.png';
import interfaceImg from '../../images/Interface.png';
import { Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const aboutCard = [
    {
        id: 1,
        img: experience,
        title: 'Experience Design'
    },
    {
        id: 2,
        img: interfaceImg,
        title: 'Interface Design'
    },
    {
        id: 3,
        img: prototyping,
        title: 'Prototyping'
    },
    {
        id: 4,
        img: illustration,
        title: 'Illustration'
    }
]

const About = () => {
    const [about] = useState(aboutCard)
    return (
        <>
            <section id="about">
                <Container >
                    <section>
                        <div className="text-center mb-5">
                            <h2 className="section-title">What we do</h2>
                            <p className="p-text">Our main focus is to make the User Experience very simple and easy. Simplicity is our Strength.
                </p>
                        </div>
                        <Row>
                            {
                                about.map(ab => <div key={ab.id} className="col-12 col-sm-6 col-md-6 col-lg-3">
                                    <div className="about-cards">
                                        <div className=" img-top d-flex align-items-center justify-content-center">
                                            <img src={ab.img} alt={ab.title} class="img-fluid" />
                                        </div>
                                        <div className="text-center card-body">
                                            <h5><strong>{ab.title}</strong></h5>
                                            <p className="text-secondary">
                                                The point of using Lorem Ipsum is that it has a more-orless normal.
                                        </p>
                                        </div>
                                    </div>
                                </div>)
                            }
                        </Row>
                    </section>
                    <section>
                       <Row>
                       <div className="col-12 col-md-6">
                        <div>
                            <img src={aboutImg} alt="" className="img-fluid"/>
                        </div>
                        </div>
                        <div className="col-12 col-md-6 d-flex align-items-center">
                            <div className="ml-2">
                                <h2 className="section-title">
                                    Stay Running & Project
                                </h2>
                                <p className="text-secondary">
                                It is a long established fact that a reader will be distracted by the
readable content of a page when looking at its layout. The point of
using Lorem Ipsum is that it has a more-or-less normal distribution
of letter.
                                </p>
                                <Link to="#contact-us">
                                        <button className="global-btn">
                                            Contact Us
                </button>
                                    </Link>
                            </div>
                        </div>
                       </Row>
                    </section>
                </Container>
            </section>
        </>
    );
};

export default About;