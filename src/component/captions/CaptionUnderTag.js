import React, { useState } from "react";
import { connect } from "react-redux";
import Spinner from "../Spinner";
import { Link } from "react-router-dom";
import { Button, ButtonToolbar } from "react-bootstrap";
import AddCaptionToTag from "./AddCaptionToTag";
import CaptionUnderTagItem from "./CaptionUnderTagItem";
import Fade from "react-reveal/Fade";
import Flash from "react-reveal/Flash";

const CaptionUnderTag = ({ tag: { tagsWIthCaption } }) => {
  const [tagModalShow, setTagModalShow] = useState(false);

  if (tagsWIthCaption === "") {
    return <Spinner />;
  }

  return (
    <>
      <div className="container py-5">
        <div className="row">
          <div className="col-10 mx-auto col-md-6 text-center text-uppercase mb-3 shadow rounded">
            <Fade left>
              <h1 className="text-slanted">
                Captions Under {tagsWIthCaption.tag} Tag{" "}
              </h1>
            </Fade>
          </div>
        </div>

        <div className="container">
          <div className="row">
            <div className="col-10 mx-auto col-md-6 text-center text-uppercase mb-3 mt-3 rounded">
              <div className="shadow">
                <Flash>
                  <ButtonToolbar>
                    <Button
                      variant="secondary"
                      onClick={() => setTagModalShow(true)}
                      block
                    >
                      Add Caption to Tag
                    </Button>

                    <AddCaptionToTag
                      tagsWIthCaption={tagsWIthCaption}
                      show={tagModalShow}
                      onHide={() => setTagModalShow(false)}
                    />
                  </ButtonToolbar>
                </Flash>
              </div>
            </div>
          </div>
        </div>
        <div className="container ">
          <div className="row">
            <div className="col text-capitalize bg-warning text-sm-left ">
              {tagsWIthCaption && tagsWIthCaption.captions.length === 0 ? (
                <h2 className="text-center">No Caption</h2>
              ) : (
                tagsWIthCaption &&
                tagsWIthCaption.captions.map((caption, index) => (
                  <CaptionUnderTagItem
                    key={index}
                    tagsWIthCaption={caption}
                    id={index + 1}
                  />
                ))
              )}
            </div>
          </div>

          <div className=" text-center  m-3">
            <Link to="/tags">
              {" "}
              <button className=" btn btn-secondary">Back to Tags</button>{" "}
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

const mapStateToProps = state => ({
  tag: state.tag
});

export default connect(mapStateToProps, {})(CaptionUnderTag);
