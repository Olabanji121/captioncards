import { GET_TAGS, TAGS_ERROR, TAGS_WITH_CAPTION, ADD_TAGS } from "../actions/types";


const initialState = {
    tags: [],
    newTag: '',
    tagsWIthCaption: '',
    error:{},
    loading: true

}


export default function (state= initialState, action){
    const {type, payload} = action;

    switch (type){
        case GET_TAGS:
            return {
                ...state,
                tags:payload,
                loading: false,
                tagsWIthCaption: '',
            }
        case ADD_TAGS:
            return {
                ...state,
                newTag:payload,
                loading: false
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