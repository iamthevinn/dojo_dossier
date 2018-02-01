import React from 'react';
import './ui-toolkit/css/nm-cx/main.css'
import './App.css';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {
    CHANGE_TAB
  } from './index';


const TabDisplay = (props) => {

    const tabsToDisplay = props.tabs.map((tab, index) => {
  
      let returnTab = <li key={"Tab" + index} className="filter-nav-entry"><button key={"TabButton" + index} onClick={() => props.changeSelectedTab(index)}>{tab.tabName}</button></li>;
      if (props.selectedTab === index)
        returnTab = <li key={"Tab" + index} className="filter-nav-entry active"><button key={"TabButton" + index} onClick={() => props.changeSelectedTab(index)}>{tab.tabName}</button></li>
      return returnTab})
  
    return (
      <ul className="filter-nav">
        {tabsToDisplay}
      </ul>
    )
  }

  TabDisplay.propTypes = {
    tabs: PropTypes.array,
    selectedTab: PropTypes.number,
    changeSelectedTab: PropTypes.func
  }
  
  const mapTabDisplayStateToProps = (state) => {
    return {
      tabs: state.tabs,
      selectedTab: state.selectedTab
    }
  }
  
  const mapTabDisplayDispatchToProps = (dispatch) => {
    return {
      changeSelectedTab(index) {
        dispatch({type: CHANGE_TAB, payload: index})
      }
    }
  }
  
  
  export default connect(mapTabDisplayStateToProps, mapTabDisplayDispatchToProps)(TabDisplay)
  