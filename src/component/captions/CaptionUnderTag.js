import React, { useState } from "react";
import { connect } from "react-redux";
import Spinner from "../Spinner";
import { Link } from "react-router-dom";
import { Button, ButtonToolbar } from "react-bootstrap";
import AddCaptionToTag from "./AddCaptionToTag";
import CaptionUnderTagItem from "./CaptionUnderTagItem";

const CaptionUnderTag = ({ tag: { tagsWIthCaption } }) => {
  console.log(tagsWIthCaption);

  const [tagModalShow, setTagModalShow] = useState(false);

  if (tagsWIthCaption === "") {
    return <Spinner />;
  }

  return (
    <>
      <div className="container py-5">
        <div className="row">
          <div className="col-10 mx-auto col-md-6 text-center text-uppercase mb-3 shadow rounded">
            <h1 className="text-slanted">
              Captions Under {tagsWIthCaption.tag} Tag{" "}
            </h1>
          </div>
        </div>

        <div className="container">
          <div className="row">
            <div className="col-10 mx-auto col-md-6 text-center text-uppercase mb-3 mt-3 rounded">
              <div className="shadow">
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
              </div>
            </div>
          </div>
        </div>
        <div
          className="card  bg-warning shadow border-0 rounded "
          style={{ height: "100%" }}
        >
          <div className="card-body text-capitalize">
            {tagsWIthCaption && tagsWIthCaption.captions.length === 0 ? (
              <h2>No Caption</h2>
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

          <div className=" text-center  mb-3">
            <Link to="/tags">
              {" "}
              <button className=" btn btn-primary">Back to Tags</button>{" "}
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
