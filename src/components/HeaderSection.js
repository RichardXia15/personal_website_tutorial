import React, { Component } from 'react';
import '../styles/HeaderSection.css';

class HeaderSection extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <div>
                <div className="introduction">Hello my name is <b>Richard</b> and I am a </div>
                <h1>
                    full stack web developer 
                </h1>
                <h1>
                    analyst and student
                </h1>
            </div>
        )
    }
}

export default HeaderSection;