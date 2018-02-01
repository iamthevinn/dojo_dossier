import React from 'react';
import './App.css';
import './ui-toolkit/css/nm-cx/main.css'
import { connect } from 'react-redux';
import {
  CHANGE_ITEM_INPUT_TEXT,
  ADD_ITEM,
  CHANGE_TAB_INPUT_TEXT,
  ADD_TAB,
  CHANGE_TAB
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


const ItemInputSectionWrapped = connect(mapItemInputSectionStateToProps, mapItemInputSectionDispatchToProps)(ItemInputSection)

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

const ListItemDisplayWrapped = connect(mapListItemDisplayStateToProps)(ListItemDisplay)

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


const TabDisplayWrapped = connect(mapTabDisplayStateToProps, mapTabDisplayDispatchToProps)(TabDisplay)


const DossierDisplay = (props) => {

    let dossier = null;
    if (props.tabs.length > 0) {
      dossier = <div>
                  <TabDisplayWrapped />
                  <div className="dossierBody">
                    <div className="card">
                      <ListItemDisplayWrapped />
                      <ItemInputSectionWrapped />
                    </div>
                  </div>
                </div>
    }

    return (
      dossier
    )
}

const mapDossierDisplayStateToProps = (state) => {
  return {
    tabs: state.tabs
  }
}

const DossierDisplayWrapped = connect(mapDossierDisplayStateToProps)(DossierDisplay)

const TabInputSection = (props) => {
  
  function updateTabText(event) {
    props.changingTabText(event.target.value)
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
          <button onClick={props.addTabButtonClicked}>Add New Tab</button>
        </div>
      </div>
    </div>
  )
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

const TabInputSectionWrapped = connect(mapTabInputSectionStateToProps, mapTabInputSectionDispatchToProps)(TabInputSection)

const App = (props) => {

    return (
      <div>
        <h1 className="header">Dojo Dossier</h1>
        <div className="App">
          <div className="AppContainer">
            <TabInputSectionWrapped />
            <DossierDisplayWrapped />
          </div>
        </div>
      </div>
  );
}

export default App;
