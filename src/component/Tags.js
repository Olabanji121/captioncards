import React, {useEffect} from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import {getTags} from '../actions/tag'
import TagList from './TagList'

const Tags = ({getTags, tag:{tags}}) => {

    useEffect(()=>{
        getTags()
    }, [getTags])

    

    console.log(tags);


    // if(tag.loading){
    //     return <div>loading</div>
    // }
  return (
    <>
      <div className="container py-5">
        {/* title */}
        <div className="row">
          <div className="col-10 mx-auto col-md-6 text-center text-uppercase mb-3">
            <h1 className="text-slanted">Tag list</h1>
          </div>
        </div>
        {/* end of title */}
        <div className="row">
          {tags.map((tag, index) => (
            <TagList key={index} tg={tag}  id={index + 1}/>
          ))}
        </div>
      </div>
    </>
  );
};

const mapStateToProps = state => ({
   
    tag: state.tag
  });

export default connect(mapStateToProps, { getTags }) (Tags);
