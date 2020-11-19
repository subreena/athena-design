import React, { useState } from 'react';
import experience from '../../images/Experience.png';
import prototyping from '../../images/Prototyping.png';
import illustration from '../../images/Illustrating.png';
import interfaceImg from '../../images/Interface.png';
import { Container, Row } from 'react-bootstrap';

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
                <Container fluid>
                    <section>
                        <div className="text-center mb-5">
                            <h2 className="section-title">What we do</h2>
                            <p>Our main focus is to make the User Experience very
                             <br />
                   simple and easy. Simplicity is our Strength.
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
                                            <h5>{ab.title}</h5>
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
                        <div className="col-12 col-sm-6 col-md-3"></div>
                    </section>
                </Container>
            </section>
        </>
    );
};

export default About;