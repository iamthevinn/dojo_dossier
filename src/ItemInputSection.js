import React from 'react';
import './ui-toolkit/css/nm-cx/main.css'
import './App.css';
import { connect } from 'react-redux';
import {
    CHANGE_ITEM_INPUT_TEXT,
    ADD_ITEM
  } from './index';

const ItemInputSection = (props) => {

    function updateInputText(event) {
      props.changingInputItemText(event.target.value)
    }
  
    return (
      <div className="row">
        <div className="small-1 medium-1 large-1 columns">&nbsp;</div>
        <div className="small-9 medium-9 large-9 columns">
          <input type="text" placeholder="Item" value={props.inputText} onChange={updateInputText} />
        </div>
        <div className="small-2 medium-2 large-2 columns">
          <button onClick={props.addItemButtonClicked}>Add Item</button>
        </div>
      </div>
    )
  }
  
  const mapItemInputSectionStateToProps = (state) => {
    return {
      //tabs: state.tabs,
      //selectedTab: state.selectedTab
      inputText: state.tabs[state.selectedTab].inputText
    }
  }
  
  const mapItemInputSectionDispatchToProps = (dispatch) => {
    return {
      changingInputItemText(text) {
        dispatch({type: CHANGE_ITEM_INPUT_TEXT, payload: text})
      },
      addItemButtonClicked() {
        dispatch({type: ADD_ITEM})
      }
    }
  }
  
  
  export default connect(mapItemInputSectionStateToProps, mapItemInputSectionDispatchToProps)(ItemInputSection)
  