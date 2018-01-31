import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './ui-toolkit/css/nm-cx/main.css'

class App extends Component {
  render() {
    return (
      <div>
        <h1>Dojo Dossier</h1>
        <div className="App">
          <div className="AppContainer">
            <div className="inputBoxes">
              <div className="row">
                <div className="small-9 medium-9 large-9 columns" />
                <div className="small-3 medium-3 large-3 columns">
                  <input type="text" placeholder="Title" />
                </div>
              </div>
              <div className="row">
                <div className="small-9 medium-9 large-9 columns" />
                <div className="small-3 medium-3 large-3 columns">
                  <button>Add New Tab</button>
                </div>
              </div>
            </div>
            <div>
              <ul class="filter-nav">
                <li class="filter-nav-entry"><button>Summary</button></li>
                <li class="filter-nav-entry"><button>Basics</button></li>
                <li class="filter-nav-entry"><button>Budget</button></li>
                <li class="filter-nav-entry"><button>Accounts</button></li>
              </ul>
              <div className="dossierBody">
                <div className="card">
                  <div className="row">
                    <div className="small-1 medium-1 large-1 columns">&nbsp;</div>
                    <div className="small-9 medium-9 large-9 columns">
                      <ul>
                        <li>Great listener</li>
                        <li>Owns a pet python</li>
                        <li>Played volleyball in college</li>
                      </ul>
                    </div>
                    <div className="small-2 medium-2 large-2 columns">
                    </div>
                  </div>
                  <div className="row">
                    <div className="small-1 medium-1 large-1 columns">&nbsp;</div>
                    <div className="small-9 medium-9 large-9 columns">
                      <input type="text" placeholder="Title" />
                    </div>
                    <div className="small-2 medium-2 large-2 columns">
                      <button>Add Item</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
