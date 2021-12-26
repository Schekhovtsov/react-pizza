import {SET_LOADED, SET_PIZZAS} from '../const';
import axios from 'axios';

export const setLoaded = (payload) => ({
    type: SET_LOADED,
    payload
})

export const fetchPizzas = (sortBy, category) => (dispatch) => {
    console.log(sortBy, category)
    dispatch(setLoaded(false))
    axios.get('http://localhost:3001/pizzas').then(({data}) => {
        dispatch(setPizzas(data))
    });
}

export const setPizzas = (items) => ({
    type: SET_PIZZAS,
    payload: items
})

