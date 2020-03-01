import React from "react";
import { connect } from "react-redux";

import { getCaptionWIthTag } from "../../actions/tag";

import { Link } from "react-router-dom";

const TagList = ({ tg, tag: { tagsWIthCaption }, getCaptionWIthTag, id }) => {
  const handleCaption = () => {
    getCaptionWIthTag(id);
  };

  return (
    <div className="col-10 mx-auto col-md-6 col-lg-4 my-3">
      <div className="card" style={{ height: "100%" }}>
        <div className="card-body text-capitalize">
          <ul
            className="text-warning text-slanted text-center img-card-top p-3 m-3"
            style={{ height: "5rem" }}
          >
            <div className="mt-3">
              <h4>{tg}</h4>

              {tagsWIthCaption !== null ? (
                <Link to="/captionundertag">
                  {" "}
                  <button
                    className=" btn btn-primary"
                    onClick={() => handleCaption()}
                  >
                    show caption
                  </button>{" "}
                </Link>
              ) : (
                <Link to="/captionundertag">Empty </Link>
              )}
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  tag: state.tag
});

export default connect(mapStateToProps, { getCaptionWIthTag })(TagList);
