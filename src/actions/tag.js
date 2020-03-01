import axios from "axios";
import { GET_TAGS, TAGS_ERROR, TAGS_WITH_CAPTION, ADD_TAGS } from "./types";

// get tags

export const getTags = () => async dispatch => {
  try {
    const res = await axios.get(
      "https://capcards-api.herokuapp.com/v1.0/api/tag/"
    );
    dispatch({
      type: GET_TAGS,
      payload: res.data.data.tags
    });
  } catch (err) {
    dispatch({
      type: TAGS_ERROR,
      payload: err.message
    });
  }
};

// get caption under each tag

export const getCaptionWIthTag = id => async dispatch => {
  try {
    const res = await axios.get(
      `https://capcards-api.herokuapp.com/v1.0/api/caption/withTag?tagId=${id}`
    );
    dispatch({
      type: TAGS_WITH_CAPTION,
      payload: res.data.data
    });
  } catch (err) {
    dispatch({
      type: TAGS_ERROR,
      payload: err.message
    });
  }
};


// add tags 

export const addTag = (formData, history)=> async dispatch =>{
  try {

    const config = {
      headers: {
        "Content-Type": "application/json"
      }
    };

    const res = await axios.post("https://capcards-api.herokuapp.com/v1.0/api/tag/", formData, config)

    dispatch({
      type:ADD_TAGS,
      payload:res.data
    })

    history.push('/tags')

  } catch (err) {
    dispatch({
      type: TAGS_ERROR,
      payload: err.message
    });
  }
}
