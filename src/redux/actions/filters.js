import {SET_CATEGORY, SET_SORT_BY, SET_SORT_ORDER} from '../const';

export const setSortBy = (name) => ({
    type: SET_SORT_BY,
    payload: name
})

export const setSortOrder = (order) => ({
    type: SET_SORT_ORDER,
    payload: order
})

export const setCategory = (catIndex) => ({
    type: SET_CATEGORY,
    payload: catIndex
})