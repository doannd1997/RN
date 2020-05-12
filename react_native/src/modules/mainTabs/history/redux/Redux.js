import {createStore} from "redux";

const defaultState = {
  history: [
    {
      title: '25/10/2019',
      data: ['Pizza', 'Burger', 'Risotto'],
    },
  ],
};

for (var i=0; i<100; i++){
    var last = defaultState.history[defaultState.history.length-1];
    defaultState.history.push(last)
}

const reducer = (state=defaultState)=>{
    return defaultState;
}

export default createStore(reducer, {});