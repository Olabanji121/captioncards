import React from 'react'
import { connect } from "react-redux";
import { Form } from 'react-bootstrap';
import {getCaptionWIthTag} from '../actions/tag'

const TagList = ({tg, tags, getCaptionWIthTag, id}) => {

    // // console.log(tg,tags);
    // const index = tags.findIndex(tg)

    console.log(id);
    
    
    return (
        <div className="col-10 mx-auto col-md-6 col-lg-4 my-3">
        <div className="card" style={{ height: "100%" }}>
            
            <div className="card-body text-capitalize">
                
                <ul  className="text-warning text-slanted text-center img-card-top p-3 m-3" style={{ height: "5rem" }}>
                   <li onClick={()=>getCaptionWIthTag(id)}>{tg}</li> 
                </ul>
            </div>
                
            </div>
        </div>
    )
}

const mapStateToProps = state => ({
   
    tag: state.tag
  });


export default connect(mapStateToProps, { getCaptionWIthTag }) (TagList)
