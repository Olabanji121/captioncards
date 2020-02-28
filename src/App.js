import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Caption from "./component/captions/Caption";
import NavBar from "./component/NavBar";
import CaptionUnderTag from './component/captions/CaptionUnderTag';
import Tag from "./component/tags/Tags";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";
function App() {
  return (
    <>
      <Provider store={store}>
        <Router>
          <NavBar />
          <Switch>
            <Route path="/" exact component={Caption} />
            <Route path="/captionundertag" exact component={CaptionUnderTag} />
            <Route path="/tags" exact component={Tag} />
          </Switch>
        </Router>
      </Provider>
    </>
  );
}

export default App;
