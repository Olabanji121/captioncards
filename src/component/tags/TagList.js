import React from "react";
import { connect } from "react-redux";
import Flip from 'react-reveal/Flip'
import { getCaptionWIthTag } from "../../actions/tag";
import {Tag, Date} from '../style'
import { Link } from "react-router-dom";

const TagList = ({ tg, tag: { tagsWIthCaption }, getCaptionWIthTag, id }) => {
  const handleCaption = () => {
    getCaptionWIthTag(id);
  };

  return (
    <div className="col-10 mx-auto col-md-6 col-lg-4 my-3 ">
      <div className="card  bg-warning shadow border-0 rounded" style={{ height: "100%" }}>
        <div className="card-body text-capitalize">
          <ul
            className=" text-slanted text-center img-card-top p-1"
            style={{ height: "8rem" }}
          >
             <Date>
        <span class="badge badge-light">{id}</span>
      </Date>
            <div className="mt-3">
              <Flip>
              <Tag>{tg}</Tag>
              </Flip>
            
                <div className="pt-3">
                {tagsWIthCaption !== null ? (
                <Link to="/captionundertag">
                  {" "}
                  <button
                    className=" btn btn-secondary"
                    onClick={() => handleCaption()}
                  >
                    show caption
                  </button>{" "}
                </Link>
              ) : (
                <Link to="/captionundertag">Empty </Link>
              )}
                </div>
             
            </div>
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
