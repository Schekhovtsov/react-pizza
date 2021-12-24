import {SET_CATEGORY, SET_SORT_BY} from '../const';

export const setSortBy = (name) => ({
    type: SET_SORT_BY,
    payload: name
})

export const setCategory = (catIndex) => ({
    type: SET_CATEGORY,
    payload: catIndex
})