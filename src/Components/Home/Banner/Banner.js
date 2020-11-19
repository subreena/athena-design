import React from 'react';
import { Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import bannerImg from '../../images/banner.png';
import './Banner.css';
const Banner = () => {
    return (
        <>
            <div id="home">
                <section className="banner">
                    <Container fluid="sm">
                        <Row>
                            <div className="col-12 col-md-6 col-lg-6 d-flex align-items-center justify-content-center">
                                <div>
                                    <h1 className="heading"> Florence Agency</h1>
                                    <br/>
                                    <p className="p-text">
                                        Lorem Ipsum has been the industry's standard dummy text ever 
since the 1500s, when an unknown printer took a galley of type and 
scrambled it to make a type specimen book.
                </p>
                <br/>
                                    <Link to="#pricing">
                                        <button className="global-btn">
                                            See Pricing
                </button>
                                    </Link>
                                    <br/>
                                    <br/>
                                </div>
                            </div>
                            <div className="col-12 col-md-6 col-lg-6">
                                <div>
                                    <img src={bannerImg} alt="athena-agency" className="img-fluid" />
                                </div>
                            </div>
                        </Row>
                    </Container>
                </section>
            </div>
        </>
    );
};

export default Banner;