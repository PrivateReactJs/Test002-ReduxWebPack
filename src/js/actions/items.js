
import { ADD_ARTICLE,ITEMS_HAS_ERRORED,ITEMS_IS_LOADING,ITEMS_FETCH_DATA_SUCCESS } from "../constants/action-types";

export const __addAnArticle = article => (
    { type: ADD_ARTICLE, payload: article }
);

export function addAnArticle(article) {
    console.log("actions/index.js - " + ADD_ARTICLE);
    return {
        type: ADD_ARTICLE,
        payload: article
    };
}

export function itemsHasErrored(bool) {
    return {
        type: ITEMS_HAS_ERRORED,
        hasErrored: bool
    };
}

export function itemsIsLoading(bool) {
    console.log("actions/index.js - " + ITEMS_IS_LOADING);
    return {
        type: ITEMS_IS_LOADING,
        isLoading: bool
    };
}

export function itemsFetchDataSuccess(items) {
    console.log("actions/index.js - " + ITEMS_FETCH_DATA_SUCCESS);
    return {
        type: ITEMS_FETCH_DATA_SUCCESS,
        items
    };
}

export function errorAfterFiveSeconds() {
    // We return a function instead of an action object
    return (dispatch) => {
        setTimeout(() => {
            // This function is able to dispatch other action creators
            dispatch(itemsHasErrored(true));
        }, 5000);
    };
}

export function itemsFetchData(url) {
    console.log("actions/index.js - itemsFetchData" );

    return (dispatch) => {
        dispatch(itemsIsLoading(true));
        fetch(url)
            .then((response) => {
                if (!response.ok) {
                    throw Error(response.statusText);
                }
                dispatch(itemsIsLoading(false));
                return response;
            })
            .then((response) => response.json())
            .then((items) => dispatch(itemsFetchDataSuccess(items)))
            .catch(() => dispatch(itemsHasErrored(true)));
    };
}