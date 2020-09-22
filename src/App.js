import React from 'react';
import Utama from './utama';
import {Link} from 'react-router-dom';
 
import './App.css';  

class App extends React.Component{
  render(){
    return(
      <div>

        <nav class="navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light" id="ftco-navbar">
          <div class="container">
          <Link class="navbar-brand" to="/">Adiwiyata</Link>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#ftco-nav" aria-controls="ftco-nav" aria-expanded="false" aria-label="Toggle navigation">
              <span class="oi oi-menu"></span> Menu
            </button>

            <div class="collapse navbar-collapse" id="ftco-nav">
              <ul class="navbar-nav ml-auto">
                <li class="nav-item"><Link class="nav-link" to="/">Beranda</Link></li>
                <li class="nav-item"><Link class="nav-link" to="/Tentangsaya">Profil</Link></li>
              </ul>
            </div>
          </div>
        </nav>

        <p><Utama /></p>

      </div>
    );
  }
}

export default App;