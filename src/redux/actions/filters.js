import {SET_CATEGORY, SET_SORT_BY} from '../const';

const setSortByAC = (name) => ({
    type: SET_SORT_BY,
    payload: name
})

const setCategoryAC = (catIndex) => ({
    type: SET_CATEGORY,
    payload: catIndex
})