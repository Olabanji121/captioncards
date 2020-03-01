import React from "react";
import {Title, Date} from '../style'


const CaptionItem = ({caption, id}) => {

 
   return(
    <div className="col-10 mx-auto col-md-6 col-lg-4 my-3 ">
    <div className="card  bg-warning shadow border-0 rounded " style={{ height: "100%" }}>
      <div className="card-text text-capitalize">
        <div
          className="text-warning text-slanted text-center img-card-top pb-1 "
          style={{ height: "15rem" }}
        >
          <Date>
        <span class="badge badge-light">{id}</span>
      </Date>
      <span className="text-center pb-5"  style={{ height: "15rem", paddingBottom: "30px" }}> 
   <Title>{caption}</Title>
      </span>
     
      
        </div>
      </div>
    </div>
  </div>




    
   )
}






export default CaptionItem;
