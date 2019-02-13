import React, { Component } from 'react';
import '../styles/App.css';

import MyNav from './myNav';
import HeaderSection from './HeaderSection';
import AboutSection from './AboutSection';
import PortfolioSection from './PortfolioSection';
import ContactSection from './ContactSection';
import FooterSection from './FooterSection';

class App extends Component {
    render() {
        return (
            <div className="App">
                <MyNav/>
                <header className="App-header Header-background">
                    <HeaderSection/>
                </header>
                <AboutSection/>
                <PortfolioSection/>
                <ContactSection/>
                <FooterSection/>
            </div>
        );
    }
}

export default App;
