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
                                text="Currently studying computer engineering at UTD.
                                Expected graduation is Spring 2019."/>
                            <SkillCard
                                icon="fa fa-window-restore"
                                title="Front End Experience"
                                text="Worked with various technologies such as React, Angular,
                                and Django"/>
                            <SkillCard
                                icon="fa fa-database"
                                title="Back End Experience"
                                text="Worked with different back end solutions such as Node,
                                Entity Framework, and .NET CORE"/>
                            <SkillCard
                                icon="fa fa-window-restore"
                                title="Analytics"
                                text="I have 1 year experience working with in analytics of truck
                                driving data from the FMCSA."/>
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
                I'm currently a student at the University of Texas at Dallas.
                Previously, I've worked to build enterprise level solutions
                for companies in both the public and private sectors.
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