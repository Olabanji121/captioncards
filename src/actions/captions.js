import axios from 'axios'
import { GET_CAPTIONS, CAPTIONS_ERROR, ADD_CAPTIONS, ADD_CAPTIONS_TO_TAG} from "./types";
// get captions 

export const getCaptions = ()=> async dispatch => {

    try {
        const res  = await axios.get('https://capcards-api.herokuapp.com/v1.0/api/caption/')

        dispatch({
            type: GET_CAPTIONS,
            payload: res.data.data.captions
        })
        
    } catch (err) {
        dispatch({
            type: CAPTIONS_ERROR,
            payload:err.response.data.errors
        })
    }

}


// add caption 

export const addCaption = (formData, history)=> async dispatch =>{
    try {
  
      const config = {
        headers: {
          "Content-Type": "application/json"
        }
      };
  
      const res = await axios.post("https://capcards-api.herokuapp.com/v1.0/api/caption/", formData, config)
  
      dispatch({
        type:ADD_CAPTIONS,
        payload:res.data
      })
  
      history.push('/')
  
    } catch (err) {
      dispatch({
        type: CAPTIONS_ERROR,
        payload: err.message
      });
    }
  }


  
// add caption to tags 

export const addCaptionToTag = (formData, history)=> async dispatch =>{
    try {
  
      const config = {
        headers: {
          "Content-Type": "application/json"
        }
      };
  
      const res = await axios.post("https://capcards-api.herokuapp.com/v1.0/api/caption/multi", formData, config)
  
      dispatch({
        type:ADD_CAPTIONS_TO_TAG,
        payload:res.data
      })
  
      history.push('/tags')
  
    } catch (err) {
      
      dispatch({
        type: CAPTIONS_ERROR,
        payload:err
      });
    }
  }
  