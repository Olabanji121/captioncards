import React, { useState } from "react";
import { connect } from "react-redux";
import { Button, ButtonToolbar } from "react-bootstrap";
import { getCaptionWIthTag } from "../../actions/tag";
import CaptionUnderTag from "../captions/CaptionUnderTag";
import { Link } from "react-router-dom";

const TagList = ({ tg, tag: { tagsWIthCaption }, getCaptionWIthTag, id }) => {
  // // console.log(tg,tags);
  // const index = tags.findIndex(tg)

  // console.log(id);
  const [captionShow, setCaptionShow] = useState({
      captions:[]
  });

  const handleCaption = () => {
    getCaptionWIthTag(id);

    if(tagsWIthCaption !==null){
    setCaptionShow({...captionShow, captions: tagsWIthCaption.captions})}
    
  };

  const {captions} = captionShow

  console.log(captions);
  

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
              <button
                className=" btn btn-primary"
                onClick={() => handleCaption()}
              >
                Show Caption
              </button>

            </div>
            
          {/* { tagsWIthCaption !== null ? ( 
           captions.map((cap, i )=>(
                    <li key={i}>{cap}</li>
                ))): (<h4> no caption </h4>)} */}
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
