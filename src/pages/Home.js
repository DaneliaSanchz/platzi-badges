import React from 'react';
import { Link } from 'react-router-dom';

import './styles/Home.css';
import astronauts from '../images/astronauts.svg';
import platziconf from '../images/platziconf-logo.svg';

class Home extends React.Component {
  render() {
    return (
      <div className="Home">
        <div className="container">
          <div className="row">
            <div className="Home__col col-4">
              <img className="img-fluid" src={platziconf} alt="Logo Platzi Conf" />
              <h1>PRINT YOUR BADGES</h1>
              <p>The easiest way to manage your conference</p>
              <Link to="/badges" className="btn btn-primary">
                Start now
              </Link>
            </div>
            <div className="Home__col col-8">
              <img className="img-fluid" src={astronauts} alt="Astronauts" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
