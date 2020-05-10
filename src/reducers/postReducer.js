import { FETCH_POSTS,NEW_POST } from '../actions/types';

const initialState = {
    items:[],
    item:{}
}
// Step 2 : Reducer : 1. State 2. Action
export default function(state = initialState, action) {
    switch(action.type) {
        case FETCH_POSTS:
            console.log('reducer')
            return {
                ...state,
                items: action.payload
            }
        case NEW_POST:
            return {
                ...state,
                item: action.payload
            }

        default:
            return state;
    }
}