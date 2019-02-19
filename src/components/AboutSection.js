// /src/components/AboutSection.js
import React, { Component } from 'react';
import {
    Container,
    Row,
    Col,
    Card,
    CardText,
    CardBody,
    CardTitle } from 'reactstrap';
import '../styles/AboutSection.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';

class AboutSection extends Component {
    render() {
        return (
            <div className="about-section">
                <div className="block-padding grey-section">
                    <Container>
                        <Row className="row-padding">
                            <Col sm={{ size: 6, offset: 3 }}>
                                <AboutCardTitle/>
                                <hr></hr>
                                <AboutCardContent/>
                            </Col>
                        </Row>
                        <Row className="row-padding">
                            <SkillCard
                                icon="fa fa-university"
                                title="Student"
                                text="< talk a little about your academics here >"/>
                            <SkillCard
                                icon="fa fa-question"
                                title="<title or occupation>"
                                text="< description >"/>
                            <SkillCard
                                icon="fa fa-question"
                                title="<title or occupation>"
                                text="< description >"/>
                            <SkillCard
                                icon="fa fa-question"
                                title="<title or occupation>"
                                text="< description >"/>
                        </Row>
                    </Container>
                </div>
            </div>
        )
    }
}

function AboutCardTitle(props) {
    return (
        <div>
            <h2>about me</h2>
        </div>
    );
}

function AboutCardContent(props) {
    return (
        <div>
            <h4>
                &lt; Write a quick blurb here about yourself. Let us know a little
                more about who you are what you've done what you are interested in &gt;
            </h4>
        </div>
    );
}

function SkillCard(props) {
    return (
        <Col sm={{ size: 3 }}>
            <Card className="about-card">
                <CardBody>
                    <i className={props.icon}></i>
                    <CardTitle>{props.title}</CardTitle>
                    <CardText>{props.text}</CardText>
                </CardBody>
            </Card>
        </Col>
    );
}

export default AboutSection;