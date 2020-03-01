import { GET_CAPTIONS, CAPTIONS_ERROR, ADD_CAPTIONS, ADD_CAPTIONS_TO_TAG} from "../actions/types";



const initialState = {
    captions: [],
    newCaption:'',
    addCaptionToTAg:'',
    error:{},
    loading: true

}


export default function(state= initialState, action){
    const {type, payload} = action;

        switch(type){
            case GET_CAPTIONS:
                return {
                    ...state,
                    captions: payload,
                    loading: false
                }
            case ADD_CAPTIONS:
                return {
                    ...state,
                    newCaption: payload,
                    loading: false
                }
            case ADD_CAPTIONS_TO_TAG:
                return {
                    ...state,
                    addCaptionToTAg: payload,
                    loading: false
                }
            case CAPTIONS_ERROR:
                return {
                    ...state,
                    error: payload,
                    loading: false
                }

            default:
                return state;
        }
}