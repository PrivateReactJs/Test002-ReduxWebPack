
import { combineReducers } from 'redux';
import { addAnArticle,items, itemsHasErrored, itemsIsLoading } from './items';


export default combineReducers({
    addAnArticle,
    items,
    itemsHasErrored,
    itemsIsLoading
});