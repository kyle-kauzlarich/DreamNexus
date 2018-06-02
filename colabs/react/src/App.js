import React, { Component } from 'react';
import './App.css';

function Colab(props) {
  return (
    <div className='colab-container'>
      <div><img src={props.img} className='colab-img' alt={props.name} /></div>
      <div>
        <h1 className='colab-title'>{props.name}</h1>
        <p>{props.about}</p>
        <br/>
        <a href={props.linkdin}>{props.linkdin}</a> <br/> 
        <a href={props.github}>{props.github}</a> <br/> 
        <a href={props.portfolio}>{props.portfolio}</a>
      </div>
    </div>
  )
}

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
              <a href=''
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
          <Colab name='Elizabeth McKenzie' 
          img='https://media.licdn.com/dms/image/C4E03AQHO-2L965Sfcg/profile-displayphoto-shrink_800_800/0?e=1533168000&v=beta&t=pbNbSXLd-tPxStxBIb3tvkByVLiebPl0waeSlKmPqsM'
          about='Aenean auctor enim dolor, id vulputate metus elementum et. Praesent consequat ipsum purus, sit amet pulvinar risus facilisis sit amet. Donec posuere nec tellus ac luctus. Quisque nibh arcu, semper eu aliquet quis, fermentum nec leo. Curabitur tincidunt at mi non fermentum. Curabitur eget mi nisi. Donec sit amet laoreet libero, eget bibendum justo. Curabitur sagittis et ipsum ut molestie. Vestibulum facilisis augue metus, ut bibendum augue rhoncus nec. Etiam dapibus eget ipsum non auctor. Proin cursus, ipsum sed scelerisque ultrices, enim dolor vulputate urna, sed convallis metus neque non ligula.'
          linkdin='https://www.linkedin.com/in/thelizmckenzie/'
          github='https://github.com/ElizabethMcKenzie'
          portfolio='http://thelizmckenzie.com/'
           />
          <Colab 
          //usage for adding a member to the colab page
          name='' //colabs name
          img='' //go to linkdin profile click profile pic > view image use this link
          about='' // put the about me here 
          linkdin=''//link to colabs linkdin profile
          github='' //link to colabs github profile
          portfolio='' //link to personal portfolio
          />
          </div> {/* app container bottom end */}
        </div> {/* app container end */}
      </div>
    );
  }
}

export default App;
