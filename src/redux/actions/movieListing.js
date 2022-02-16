import {
    ADD_MOVIES,
    CLEAR_SEARCH,
    LOADING_MOVIES,
    RESET_ALL_LOADED,
    SET_SEARCH
} from './types';


export const fetchMovies = (pageNumber) => {
    return (dispatch) => {
        dispatch(loadingListings())
        fetch(`data/CONTENTLISTINGPAGE-PAGE${pageNumber}.json`)
        .then((response) => response.json())
        .then(  (res)=> {
            dispatch(addMovies(res.page["content-items"].content))
        })
    }
};

export const loadingListings = () => {
    return ({
        type: LOADING_MOVIES
    })
};

export const addMovies = data => {
    return ({
        type: ADD_MOVIES,
        payload: data
    })
};
export const resetAllLoaded = () => {
    return ({
        type: RESET_ALL_LOADED
    })
};
export const setSearch = keyword => {
    return ({
        type: SET_SEARCH,
        payload: keyword
    })
};
export const clearSearch = () => {
    return ({
        type: CLEAR_SEARCH  
    })
};