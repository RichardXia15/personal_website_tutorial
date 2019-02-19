import React, { Component } from 'react';
import '../styles/App.css';

import MyNav from './myNav';
import HeaderSection from './HeaderSection';
import AboutSection from './AboutSection';
import PortfolioSection from './PortfolioSection';
import ContactSection from './ContactSection';
import FooterSection from './FooterSection';

class App extends Component {
    name = "<your name here>";
    linkedin = "https://www.linkedin.com/";
    github = "https://github.com/";
    github_username = "<your_user_name_here>";
    facebook = "https://facebook.com/";
    twitter = "https://twitter.com/";

    render() {
        return (
            <div className="App">
                <MyNav name={this.name} github={this.github} linkedin={this.linkedin}/>
                <header className="App-header Header-background">
                    <HeaderSection name={this.name}/>
                </header>
                <AboutSection/>
                <PortfolioSection github_username={this.github_username}/>
                <ContactSection/>
                <FooterSection linkedin={this.linkedin} github={this.github}
                    facebook={this.facebook} twitter={this.twitter}/>
            </div>
        );
    }
}

export default App;
