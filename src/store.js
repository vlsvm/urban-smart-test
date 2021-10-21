import {createStore} from 'redux';

const defaultState = {
    login:'developer21',
    password:'123456'
}

const reducer = (state = defaultState,action)=>{
    switch(action.type){
      default:
        return state;
    }
}

const store = createStore(reducer);

export default store