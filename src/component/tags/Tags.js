import React, { useEffect, useState} from "react";
import { connect } from "react-redux";
import { getTags } from "../../actions/tag";
import AddTag from './AddTags'
import { Button, ButtonToolbar} from 'react-bootstrap'

import TagList from "./TagList";
import Spinner from '../Spinner'

const Tags = ({ getTags, tag: { tags , loading, newTag} }) => {
  useEffect(() => {
    getTags();
  }, [getTags, newTag]);

  const [tagModalShow, setTagModalShow] = useState(false);
  // console.log(tags);

  if(loading){
      return <Spinner/>
  }

  return (
    <>
      <div className="container py-5">
        <div className="row">
          <div className="col-10 mx-auto col-md-6 text-center text-uppercase mb-3 shadow rounded">
            <h1 className="text-slanted">Tag list</h1>
          </div>
        </div>

        <div className="container">
          <div className="row">
            <div className="col-10 mx-auto col-md-6 text-center text-uppercase mb-3 mt-3 rounded">
              <div className="shadow">
              <ButtonToolbar>
               
               <Button variant='secondary' onClick={()=> setTagModalShow(true)} block>
                   Add Tag
               </Button>

               
               <AddTag show={tagModalShow} onHide={()=> setTagModalShow(false)}/>
           </ButtonToolbar>
              </div>
            </div>
          </div>
        </div>
        
        <div className="row">
          {tags.map((tag, index) => (
            <TagList key={index} tg={tag} id={index + 1}  />
          ))}
        </div>
      </div>
    </>
  );
};

const mapStateToProps = state => ({
  tag: state.tag
});

export default connect(mapStateToProps, { getTags })(Tags);


