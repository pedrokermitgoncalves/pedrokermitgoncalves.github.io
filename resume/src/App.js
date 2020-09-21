import React, { Component } from 'react';

import Header from './components/header';
import About from './components/about';
import Resume from './components/resume';
// import Portfolio from './components/portfolio';
import Footer from './components/footer';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <Header />
        <About />
        <Resume />
        {/*  
        <Portfolio />

         */}
        <Footer />
      </div>
    );
  }
}
export default App;
