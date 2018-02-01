
import React from 'react';
import './App.css';
import './ui-toolkit/css/nm-cx/main.css'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {
    CHANGE_TAB_INPUT_TEXT,
    ADD_TAB
  } from './index';

const TabInputSection = (props) => {
  
    function updateTabText(event) {
      props.changingTabText(event.target.value)
    }

    function addTab() {
        if (props.inputTabText.trim())
            props.addTabButtonClicked()
    }
  
    return (
      <div className="inputBoxes">
        <div className="row">
          <div className="small-9 medium-9 large-9 columns" />
          <div className="small-3 medium-3 large-3 columns">
            <input type="text" placeholder="Title" value={props.inputTabText} onChange={updateTabText} />
          </div>
        </div>
        <div className="row">
          <div className="small-9 medium-9 large-9 columns" />
          <div className="small-3 medium-3 large-3 columns">
            <button onClick={addTab}>Add New Tab</button>
          </div>
        </div>
      </div>
    )
  }

  TabInputSection.propTypes = {
    tabs: PropTypes.array,
    selectedTab: PropTypes.number,
    inputTabText: PropTypes.string,
    changingTabText: PropTypes.func,
    addTabButtonClicked: PropTypes.func
  }
  
  const mapTabInputSectionStateToProps = (state) => {
    return {
      tabs: state.tabs,
      selectedTab: state.selectedTab,
      inputTabText: state.inputTabText
    }
  }
  
  const mapTabInputSectionDispatchToProps = (dispatch) => {
    return {
      changingTabText(text) {
        dispatch({type: CHANGE_TAB_INPUT_TEXT, payload: text})
      },
      addTabButtonClicked() {
        dispatch({type: ADD_TAB})
      }
    }
  }
  
  export default connect(mapTabInputSectionStateToProps, mapTabInputSectionDispatchToProps)(TabInputSection)
  