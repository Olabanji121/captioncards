import React, { useState, useEffect } from "react";
import { Modal, Button, Row, Col } from "react-bootstrap";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { addCaptionToTag } from "../../actions/captions";
import { getTags } from "../../actions/tag";

const AddCaptionToTag = ({
  tagsWIthCaption,
  show,
  onHide,
  history,
  addCaptionToTag
}) => {
  useEffect(() => {
    addCaptionToTag();
  }, [addCaptionToTag]);

  const [formData, setFormData] = useState({
    caption: "",
    tags: []
  });

  const onChange = e => {
    setFormData({
      ...formData,
      caption: e.target.value,
      tags: [tagsWIthCaption.tag]
    });
  };

  const handleSubmit = e => {
    e.preventDefault();

    addCaptionToTag(formData, history);

    onHide();
  };
  return (
    <Modal
      show={show}
      onHide={onHide}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Add Caption to{" "}
          <span className=" text-capitalize"> {tagsWIthCaption.tag}</span> Tag
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <small className="px-3">
          Add a Caption More Than 3 Characters, Less Than 100
        </small>
        <div className="container">
          <Row>
            <Col sm={6}>
              <form onSubmit={e => handleSubmit(e)}>
                <div className="rounded">
                  <input
                    type="text"
                    name="addcaption"
                    className="form-control"
                    placeholder="write your Caption"
                    onChange={e => onChange(e)}
                    required
                  />
                </div>
                <button className="btn btn-secondary mt-3" type="submit">
                  Add Caption
                </button>
              </form>
            </Col>
          </Row>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="danger" onClick={onHide}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default connect(null, { addCaptionToTag, getTags })(
  withRouter(AddCaptionToTag)
);
