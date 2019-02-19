import React, { Component } from 'react';
import '../styles/HeaderSection.css';

class HeaderSection extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: props.name
        };
    }
    render() {
        return (
            <div>
                <div className="introduction">Hello my name is <b>{this.state.name}</b> and I am a </div>
                <h1>
                    &lt; your titles here &gt;
                </h1>
                <h1>
                    &lt; and here here &gt;
                </h1>
            </div>
        )
    }
}

export default HeaderSection;