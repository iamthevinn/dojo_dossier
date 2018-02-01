import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { createStore, compose } from 'redux';
import { Provider } from 'react-redux';

export const CHANGE_TAB_INPUT_TEXT = "CHANGE_TAB_INPUT_TEXT";
export const ADD_TAB = "ADD_TAB";
export const CHANGE_ITEM_INPUT_TEXT = "CHANGE_ITEM_INPUT_TEXT";
export const ADD_ITEM = "ADD_ITEM";
export const CHANGE_TAB = "CHANGE_TAB"

const initialState = {
  inputTabText: "",
  tabs: [],
  selectedTab: 0
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_TAB_INPUT_TEXT:
      return { ...state, inputTabText: action.payload };
    case ADD_TAB:
      let tempArrayNewTab = state.tabs.slice();
      tempArrayNewTab.push({tabName: state.inputTabText, items: [], inputText: ""})
      return { ...state, tabs: tempArrayNewTab, selectedTab: tempArrayNewTab.length - 1, inputTabText: "" };
    case CHANGE_ITEM_INPUT_TEXT:
      let tempArrayItemInputText = state.tabs.slice();
      tempArrayItemInputText[state.selectedTab].inputText = action.payload;
      return { ...state, tabs: tempArrayItemInputText };
    case ADD_ITEM:
      let tempArray = state.tabs.slice();
      tempArray[state.selectedTab].items.push(tempArray[state.selectedTab].inputText);
      tempArray[state.selectedTab].inputText = "";
      return { ...state, tabs: tempArray };
    case CHANGE_TAB:
      return { ...state, selectedTab: action.payload };  
    default:
      return state;
  }
}

const store = createStore(
  reducer,
  compose(
    window.devToolsExtension ? window.devToolsExtension() : f => f
  )
);

const Root = () => (
  /*
    We pass the store as a prop to the Provider Component. We need to use the Provider component so that components further down our component tree have access to the values in store
  */
  <Provider store={store} >
    <App />
  </Provider>
)

ReactDOM.render(<Root />, document.getElementById('root'));
registerServiceWorker();
