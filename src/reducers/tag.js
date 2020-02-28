import { GET_TAGS, TAGS_ERROR, TAGS_WITH_CAPTION } from "../actions/types";


const initialState = {
    tags: [],
    tagsWIthCaption: '',
    error:{},
    loading: true

}


export default function(state= initialState, action){
    const {type, payload} = action;

    switch (type){
        case GET_TAGS:
            return {
                ...state,
                tags:payload,
                loading: false,
                tagsWIthCaption: '',
            }
        case TAGS_WITH_CAPTION:
            return {
                ...state,
                tagsWIthCaption: payload,
                loading: false
            }
        case TAGS_ERROR:
            return {
                ...state,
                error: payload,
                loading: false
            }

        default:
            return state;
    }
}