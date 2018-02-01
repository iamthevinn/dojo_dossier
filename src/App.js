import React from 'react';
import './App.css';
import './ui-toolkit/css/nm-cx/main.css';
import { connect } from 'react-redux';
import DossierDisplay from './DossierDisplay';
import TabInputSection from './TabInputSection';

const App = (props) => {

    return (
      <div>
        <h1 className="header">Dojo Dossier</h1>
        <div className="App">
          <div className="AppContainer">
            <TabInputSection />
            <DossierDisplay />
          </div>
        </div>
      </div>
  );
}

export default App;
