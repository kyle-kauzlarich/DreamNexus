import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className='app-bkg'>
        <div className="app__container">

          <div className='app__container-top'>

            <div className='app__container-nav'>
              <span className='container-nav-item'>
                <a href="http://thelizmckenzie.com/dreamnexus/"
                >Home</a>
              </span>
              <span className='container-nav-item'>
              <a href="https://lambdaschoolstudents.slack.com"
              >Slack</a>
              </span>
              <span className='container-nav-item'>Google goes here</span>
              <span className='container-nav-item'>
              <a href='#'
              >Calendar</a>
              </span>
              <span className='container-nav-item'>
              <a href="./colabs/index.html"
              >Colabs</a>
              </span>
            {/* <a href="http://thelizmckenzie.com/dreamnexus/"
            >Take Me Home</a> */}
            </div> {/* app container nav end */}
            <img src='http://thelizmckenzie.com/dreamnexus/DreamNexus/img/dreamnexus.png'
            className='app__container-img' 
            alt="baner logo" />

          </div> {/* app container top end */}
          <div className='app__container-bottom'>
          
          </div> {/* app container bottom end */}
        </div> {/* app container end */}
      </div>
    );
  }
}

export default App;
