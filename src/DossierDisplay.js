import React from 'react';
import './App.css';
import './ui-toolkit/css/nm-cx/main.css'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ItemInputSection from './ItemInputSection';
import ListItemDisplay from './ListItemDisplay';
import TabDisplay from './TabDisplay';

const DossierDisplay = (props) => {

    let dossier = null;
    if (props.tabs.length > 0) {
      dossier = <div>
                  <TabDisplay />
                  <div className="dossierBody">
                    <div className="card">
                      <ListItemDisplay />
                      <ItemInputSection />
                    </div>
                  </div>
                </div>
    }

    return (
      dossier
    )
}

DossierDisplay.propTypes = {
  tabs: PropTypes.array
}

const mapDossierDisplayStateToProps = (state) => {
  return {
    tabs: state.tabs
  }
}

export default connect(mapDossierDisplayStateToProps)(DossierDisplay)
