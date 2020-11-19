import React, { useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import happy from '../../images/happy.png';
import complete from '../../images/complete.png';
import crazy from '../../images/crazy.png';
import running from '../../images/running.png';
import './Service.css'
const achievement = [
    {
        id: 1,
        img: happy,
        num: '700+',
        des: 'Happy Clients'
    },
    {
        id: 2,
        img: complete,
        num: '140+',
        des: 'Project Completed'
    },
    {
        id: 3,
        img: crazy,
        num: ' 25+',
        des: 'Crazy Minds'
    },
    {
        id: 4,
        img: running,
        num: '75+',
        des: 'Running Projects'
    },
]
const Services = () => {
    const [achievements] = useState(achievement);
    return (
        <section id="services">
            <Container fluid>
                <Row>
                    <div className="col-12 col-md-5">
                        <div className="mr-1">
                            <h3 className="section-title">
                                Our Achievements
                    </h3>
                            <p className="p-text">
                                It is a long established fact that a reader will be distracted by
                                the readable content of a page when looking at its layout. The
                                point of using Lorem Ipsum is that it has a more-or-less normal
distribution of letter.</p>
                        </div>
                    </div>
                    <div className="col-12 col-md-7">
                        <div>
                            <Row>
                                {
                                    achievements.map(ac => <div className="col-12 col-md-6 achieve" key={ac.id}> 
                                        <div className="achievement">

                                            <div>
                                                <img src={ac.img} alt="" className="img-fluid mr-3" />
                                            </div>
                                          
                                                <div>
                                                    <p className="achieve-num"><strong>{ac.num}</strong></p>
                                                    <p>{ac.des}</p>
                                                </div>
                                            
                                        </div>
                                    </div>)
                                }
                            </Row>
                        </div>

                    </div>
                </Row>
            </Container>
        </section>
    );
};

export default Services;