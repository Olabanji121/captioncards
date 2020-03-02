import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import CaptionReducer from "../../reducers/captions";

configure({ adapter: new Adapter() });

describe("Caption Reducer", () => {
  const defaultState = {
    captions: [],
    newCaption: "",
    addCaptionToTAg: "",
    error: {},
    loading: true
  };

  it("Should return default state", () => {

    expect(CaptionReducer(undefined,{})).toEqual(defaultState);
  });
});
