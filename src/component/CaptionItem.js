import React from "react";
import {Title, Date, TagButton} from './style'


const CaptionItem = () => (
    <div
    className="col-10 mx-auto col-md-6 col-lg-4 my-3"
    
  >
    <div className="card" style={{ height: "100%" , color:'#555' }}>
    <Date>
        #1
      </Date>
      <span className="text-center"  style={{ height: "10rem" }}> 
      <Title>The Benefits of Green Apples</Title>
      </span>
     
      <div className="card-footer text-center">
      <TagButton>Tags: Tags</TagButton>
      <button>Add Tag to caption</button>
      </div>
     
    </div>
  </div>
);

export default CaptionItem;
