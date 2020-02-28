import React, { useEffect } from "react";
import { Modal, Button, Row, Col, Container } from "react-bootstrap";
import { connect } from "react-redux";
import { getCaptionWIthTag } from "../../actions/tag";

const CaptionUnderTag = ({id, getCaptionWIthTag, tag:{ tagsWIthCaption}}) => {

  // useEffect(() => {

  //   getCaptionWIthTag(id)
  // },[]);

  // console.log( tagsWIthCaption);
  

  return (
    <div className="col-10 mx-auto col-md-6 col-lg-4 my-3">
      <div className="card" style={{ height: "100%" }}>
        <div className="card-body text-capitalize">

        
          <ul
            className="text-warning text-slanted text-center img-card-top p-3 m-3"
            style={{ height: "5rem" }}
          >
            {/* {tagsWIthCaption.tag} */}
          </ul>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  tag: state.tag
});

export default connect(mapStateToProps, { getCaptionWIthTag })(CaptionUnderTag);
