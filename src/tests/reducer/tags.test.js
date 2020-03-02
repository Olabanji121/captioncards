import React from "react";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import {
  GET_TAGS,
  TAGS_ERROR,
  TAGS_WITH_CAPTION,
  ADD_TAGS
} from "../../actions/types";
import TagReducer from "../../reducers/tag";

configure({ adapter: new Adapter() });

describe("Tag Reducer", () => {
  it("Should return state", () => {
    const initialState = TagReducer(undefined, {});

    expect(initialState).toEqual({}); 
  });

  it("should return new state if receiving types", () => {
    const tag = {
        tags:[{tag:'tag1'}],
        loading: false,
        tagsWIthCaption: '',
        newTag: '',
        error:{}
    }
      

    const newState = TagReducer(undefined, {
      type: GET_TAGS,  
      payload: tag
    });

    expect(newState).toBe(tag); 
  });

});
 