import {createStore } from 'redux';

function stanPoczatkowy2() {
  return {
    produkty : []
  }
}
const initState = {
    produkty: [
        {id:1,title:'Winter body', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.", price:110},
        {id:2,title:'Adidas', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.", price:80},
        {id:3,title:'Vans', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",price:120},
        {id:4,title:'White', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.", price:260},
        {id:5,title:'Cropped-sho', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.", price:160},
        {id:6,title:'Blues', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",price:90}
    ],
    addedItems:[],
    total: 0

}

export function reducer  (state=initState,action){
  console.log(action.type,"a")
  if(action.type ==="GET_P"){
    alert("ok");
     return fetch(`https://www.reddit.com/r/gifs.json`)
    .then(response => response.json())
    .then(json => {
      console.log(json);
      return ({produkty:json})
    });

  }else if(action.type == "GET_CAT_P"){

  }else{
    return state;
  }
}

const GET_P = 'GET_P';

export function getproduct() {
  console.log("klik 2")
  return {
    type: GET_P
  }
}


