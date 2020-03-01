import React, {useState} from "react";
import { connect } from "react-redux";
import Spinner from "../Spinner";
import { Link } from "react-router-dom";
import { Button, ButtonToolbar} from 'react-bootstrap'
import AddCaptionToTag from './AddCaptionToTag'

const CaptionUnderTag = ({ tag: { tagsWIthCaption } }) => {
  console.log(tagsWIthCaption);

  const [tagModalShow, setTagModalShow] = useState(false);

  if (tagsWIthCaption === "") {
    return <Spinner />;
  }

  return (
    <div className="col-10 mx-auto col-md-6 col-lg-4 my-3">
      <ButtonToolbar>
               
               <Button variant='primary' onClick={()=> setTagModalShow(true)}>
                   Add Caption to Tag
               </Button>

               
               <AddCaptionToTag tagsWIthCaption={tagsWIthCaption}  show={tagModalShow} onHide={()=> setTagModalShow(false)}/>
           </ButtonToolbar>
      <div className="card" style={{ height: "100%" }}>
        <div className="card-body text-capitalize">
        {tagsWIthCaption.tag}
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
        
        <div className=" text-center  mb-3">
          
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
