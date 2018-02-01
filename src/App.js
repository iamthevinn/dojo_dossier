import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './ui-toolkit/css/nm-cx/main.css'

const ItemInputSection = (props) => {
  return (
                          <div className="row">
                        <div className="small-1 medium-1 large-1 columns">&nbsp;</div>
                        <div className="small-9 medium-9 large-9 columns">
                          <input type="text" placeholder="Item" value={props.inputItemText} onChange={props.changingInputItemText} />
                        </div>
                        <div className="small-2 medium-2 large-2 columns">
                          <button onClick={props.addItemButtonClicked}>Add Item</button>
                        </div>
                      </div>
  )
}

const ListItemDisplay = (props) => {
  return (
                      <div className="row">
                        <div className="small-1 medium-1 large-1 columns">&nbsp;</div>
                        <div className="small-9 medium-9 large-9 columns">
                          <ul>
                            {props.items.map((item, index) => (<li key={"Item" + index}>{item}</li>))}
                          </ul>
                        </div>
                        <div className="small-2 medium-2 large-2 columns">
                        </div>
                      </div>

          
  )
}

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

const DossierDisplay = (props) => {

    let dossier = null;
    if (props.tabs.length > 0) {
      dossier = <div>
                  <TabDisplay selectedTab={props.selectedTab} changeSelectedTab={props.changeSelectedTab} tabs={props.tabs}/>
                  <div className="dossierBody">
                    <div className="card">
                      <ListItemDisplay items={props.tabs[props.selectedTab].items}/>
                      <ItemInputSection selectedTab={props.selectedTab} inputItemText={props.tabs[props.selectedTab].inputText} changingInputItemText={props.changingInputItemText} addItemButtonClicked={props.addItemButtonClicked}/>
                    </div>
                  </div>
                </div>
    }

    return (
      dossier
    )
}

const TabInputSection = (props) => (
  <div className="inputBoxes">
    <div className="row">
      <div className="small-9 medium-9 large-9 columns" />
      <div className="small-3 medium-3 large-3 columns">
        <input type="text" placeholder="Title" value={props.inputTabText} onChange={props.changingInputTabText} />
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

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputTabText: "",
      tabs: [],
      selectedTab: 0
    }
    this.changingInputTabText = this.changingInputTabText.bind(this);
    this.addTabButtonClicked = this.addTabButtonClicked.bind(this);
    this.changingInputItemText = this.changingInputItemText.bind(this);
    this.addItemButtonClicked = this.addItemButtonClicked.bind(this);
    this.changeSelectedTab = this.changeSelectedTab.bind(this);
  }

  changingInputTabText(event) {
    this.setState({inputTabText: event.target.value})
  }

  addTabButtonClicked(event) {
    let tempArray = this.state.tabs.slice();
    tempArray.push({tabName: this.state.inputTabText, items: [], inputText: ""})
    this.setState({tabs: tempArray, inputTabText: "", selectedTab: tempArray.length-1})
  }

  changingInputItemText(event) {
    let tempArray = this.state.tabs.slice();
    tempArray[this.state.selectedTab].inputText = event.target.value;
    this.setState({tabs: tempArray})
  }

  addItemButtonClicked(event) {
    let tempArray = this.state.tabs.slice();
    const tempInputText = tempArray[this.state.selectedTab].inputText;
    tempArray[this.state.selectedTab].items.push(tempInputText);
    tempArray[this.state.selectedTab].inputText = "";
    this.setState({tabs: tempArray})
  }

  changeSelectedTab(index) {
    this.setState({selectedTab: index})
  }

  render() {


    return (
      <div>
        <h1 className="header">Dojo Dossier</h1>
        <div className="App">
          <div className="AppContainer">
            <TabInputSection inputTabText={this.state.inputTabText} changingInputTabText={this.changingInputTabText} addTabButtonClicked={this.addTabButtonClicked}/>
            <DossierDisplay changeSelectedTab={this.changeSelectedTab} addItemButtonClicked={this.addItemButtonClicked} changingInputItemText={this.changingInputItemText} selectedTab={this.state.selectedTab} inputTabText={this.state.inputItemText} tabs={this.state.tabs}/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
