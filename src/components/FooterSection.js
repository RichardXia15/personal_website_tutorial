// /src/components/ContactSection.js
import React, { Component } from 'react';
import {
    Container,
    Row,
    Col
} from 'reactstrap';
import '../styles/FooterSection.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';

class FooterSection extends Component {
    render() {
        return (
            <div className="footer-section">
                <div className="block-padding grey-section">
                    <Container>
                        <Row className="row-padding">
                            <Col sm={{ offset: 4, size: 1 }}>
                                <a href="https://twitter.com/" target="_blank">
                                    <i className="fa fa-twitter fa-3x icon-box"></i>
                                </a>
                            </Col>
                            <Col sm={{ size: 1 }}>
                                <a href="https://facebook.com/" target="_blank">
                                    <i className="fa fa-facebook fa-3x icon-box"></i>
                                </a>
                            </Col>
                            <Col sm={{ size: 1 }}>
                                <a href="https://www.linkedin.com/" target="_blank">
                                    <i className="fa fa-linkedin fa-3x icon-box"></i>
                                </a>
                            </Col>
                            <Col sm={{ size: 1 }}>
                                <a href="https://github.com/RichardXia15" target="_blank">
                                    <i className="fa fa-github fa-3x icon-box"></i>
                                </a>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </div>
        )
    }
}

export default FooterSection;