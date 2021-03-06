import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import TagReducer from "../../reducers/tag";

configure({ adapter: new Adapter() });

describe("Tag Reducer", () => {
  const defaultState = {
    tags: [],
    newTag: "",
    tagsWIthCaption: "",
    error: {},
    loading: true
  };

  it("Should return default state", () => {
    expect(TagReducer(undefined,{})).toEqual(defaultState);
  });
}); 
