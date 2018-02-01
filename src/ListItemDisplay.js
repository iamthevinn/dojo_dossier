import React from 'react';
import './ui-toolkit/css/nm-cx/main.css'
import './App.css';
import { connect } from 'react-redux';

const ListItemDisplay = (props) => {
    return (
                        <div className="row">
                          <div className="small-1 medium-1 large-1 columns">&nbsp;</div>
                          <div className="small-9 medium-9 large-9 columns">
                            <ul>
                              {props.tabs[props.selectedTab].items.map((item, index) => (<li key={"Item" + index}>{item}</li>))}
                            </ul>
                          </div>
                          <div className="small-2 medium-2 large-2 columns">
                          </div>
                        </div>
  
            
    )
  }
  
  const mapListItemDisplayStateToProps = (state) => {
    return {
      tabs: state.tabs,
      selectedTab: state.selectedTab
    }
  }
  
export default connect(mapListItemDisplayStateToProps)(ListItemDisplay)
  