import React, { useEffect, useState } from "react";
import CaptionItem from "./CaptionItem";
import { connect } from "react-redux";
import { getCaptions } from "../../actions/captions";
import Spinner from "../Spinner";
import AddCaption from "./AddCaption";
import { Button, ButtonToolbar } from "react-bootstrap";
import Flip from "react-reveal/Flip";
import Flash from "react-reveal/Flash";

const CaptionList = ({
  getCaptions,
  caption: { captions, loading, newCaption }
}) => {
  const [captionModalShow, setCaptionModalShow] = useState(false);
  useEffect(() => {
    getCaptions();
  }, [getCaptions, newCaption]);

  if (loading) {
    return <Spinner />;
  }

  return (
    <div className="container py-5">
      <div className="row">
        <div className="col-10 mx-auto col-md-6 text-center text-uppercase mb-3 shadow rounded">
          <Flip>
            <h1 className="text-slanted">Caption list</h1>
          </Flip>
        </div>
        <div className="container  ">
          <div className="row">
            <div className="col-10 mx-auto col-md-6 text-center text-uppercase mb-3 mt-3 rounded">
              <div className="shadow">
                <Flash>
                  <ButtonToolbar>
                    <Button
                      variant="secondary"
                      onClick={() => setCaptionModalShow(true)}
                      block
                    >
                      Add Caption
                    </Button>
                    <AddCaption
                      show={captionModalShow}
                      onHide={() => setCaptionModalShow(false)}
                    />
                  </ButtonToolbar>
                </Flash>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className=" d-flex justify-content-center ">
        <div className="row">
          {captions.map(caption => (
            <CaptionItem
              key={caption.id}
              caption={caption.caption}
              id={caption.id}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  caption: state.caption
});

export default connect(mapStateToProps, { getCaptions })(CaptionList);
