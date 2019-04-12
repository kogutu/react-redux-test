import {createStore } from 'redux';

function stanPoczatkowy() {
  return {
    licznik : 0
  }
}

export default function  naszReducer   (state={ licznik: 0, }, action) {
    console.log(action.type,"n")
  if (action.type === ACTION_KLIKNIECIE) {
    let nowyLicznik=state.licznik+1;
    return( {licznik:nowyLicznik} );
  }else if(action.type=== ADD_DOUBLE){

    let nl = state.licznik + 2;
    return ({licznik:nl})

  } else return state;
}
export default naszReducer;

const ACTION_KLIKNIECIE = 'ACTION_KLIKNIECIE';
const ADD_DOUBLE = 'ADD_DOUBLE';
export function klikniecie() {
  console.log("klik")
  return {
    type: ACTION_KLIKNIECIE
  }
}
export function dodajdwa(){
  return {
    type: ADD_DOUBLE
  }
}

