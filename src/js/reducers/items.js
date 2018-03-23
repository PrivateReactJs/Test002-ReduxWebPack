
import { ADD_ARTICLE,ITEMS_HAS_ERRORED,ITEMS_IS_LOADING,ITEMS_FETCH_DATA_SUCCESS } from "../constants/action-types";

export function itemsHasErrored(state = false, action) {
    switch (action.type) {
        case ITEMS_HAS_ERRORED:
            return action.hasErrored;
        default:
            return state;
    }
}
export function itemsIsLoading(state = false, action) {
    switch (action.type) {
        case ITEMS_IS_LOADING:
            return action.isLoading;
        default:
            return state;
    }
}
export function items(state = [], action) {
    switch (action.type) {
        case ITEMS_FETCH_DATA_SUCCESS:
            console.log("reducers/items.js - items - " + "State:[" + JSON.stringify(state) + "]- Action:["+ JSON.stringify(action) +"]");    
            return action.items;
        default:
            return state;
    }
}

export function addAnArticle(state = [], action) {
    switch (action.type) {
        case ADD_ARTICLE:
            console.log("reducers/items.js - addAnArticle - " + "State:[" + JSON.stringify(state) + "]- Action:["+ JSON.stringify(action) +"]");
            const payload = action.payload;
            return payload;
        default:
            return state;
    }
}