import React, { Component,PropTypes } from 'react';
import logo from './logo.svg';
import style from './App.scss';
import {createStore,compose} from 'redux'
import {Provider,connect} from 'react-redux'
import {ProfilePage} from './components/profile/profile'
import CounterHOC from './counterHighOrder'

const rootReducer = (state,action) => {
  switch(action.type){
    case 'INCREASE':
      return {...state,counter:state.counter+1}
    default:
      return {...state};
  }
}

const store = createStore(rootReducer,{counter:0});

const CounterApp = compose(
  CounterHOC
)(({counter,increase})=> (
  <div>
    <p>{counter}</p>
    <button onClick={increase}>+</button>
  </div>
))

class App extends Component{
  render(){
    return (
      <Provider store={store}>
        <div>
        <CounterApp />
        <CounterApp />
        </div>
      </Provider>
    )
  }
}

export default App;
