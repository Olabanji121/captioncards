import React from "react";
import { connect } from "react-redux";
import Spinner from "../Spinner";
import { Link } from "react-router-dom";

const CaptionUnderTag = ({ tag: { tagsWIthCaption } }) => {
  console.log(tagsWIthCaption);

  if (tagsWIthCaption === "") {
    return <Spinner />;
  }

  return (
    <div className="col-10 mx-auto col-md-6 col-lg-4 my-3">
      <div className="card" style={{ height: "100%" }}>
        <div className="card-body text-capitalize">
          <ul
            className="text-warning text-slanted text-center img-card-top p-3 m-3"
            style={{ height: "5rem" }}
          >
            {tagsWIthCaption && tagsWIthCaption.captions.length === 0 ? (
              <h2>No Caption</h2>
            ) : (
              tagsWIthCaption && tagsWIthCaption.captions
            )}
          </ul>
        </div>
        <div className="text-center mb-3">
        <Link to="/tags">
          {" "}
          <button className=" btn btn-primary">Back to Tags</button>
          {" "}
        </Link>
        </div>
        
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  tag: state.tag
});

export default connect(mapStateToProps, {})(CaptionUnderTag);
