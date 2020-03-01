import React from "react";
import {Title, Date} from '../style'


const CaptionItem = ({caption, id}) => {

 
   return(
    <div className="col-10 mx-auto col-md-6 col-lg-4 my-3">
    <div className="card" style={{ height: "100%" }}>
      <div className="card-body text-capitalize">
        <div
          className="text-warning text-slanted text-center img-card-top p-3 m-3"
          style={{ height: "15rem" }}
        >
          <Date>
        #{id}
      </Date>
      <span className="text-center"  style={{ height: "10rem" }}> 
   <Title>{caption}</Title>
      </span>
     
      
        </div>
      </div>
    </div>
  </div>




    
   )
}






export default CaptionItem;
