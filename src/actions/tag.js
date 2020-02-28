import axios from 'axios'
import { GET_TAGS, TAGS_ERROR, TAGS_WITH_CAPTION } from "./types";


// get tags

export const getTags = () => async dispatch => {
    try {
      const res = await axios.get("https://capcards-api.herokuapp.com/v1.0/api/tag/");
      dispatch({
        type: GET_TAGS,
        payload: res.data.data.tags,
      });

      // console.log(res.data);
      
    } catch (err) {
      dispatch({
        type: TAGS_ERROR,
        payload: { msg: err.response.statusText, status: err.response.status }
      });
    }
  };

export const  getCaptionWIthTag = (id)=> async dispatch => {
    try {
        const res = await axios.get(`https://capcards-api.herokuapp.com/v1.0/api/caption/withTag?tagId=${id}`);
        dispatch({
          type: TAGS_WITH_CAPTION,
          payload: res.data.data,
        });
  
        // console.log(res.data.data.captions);
        
      } catch (err) {
        dispatch({
          type: TAGS_ERROR,
          payload: {msg: err.response.body }
        });

        
        
      }
}