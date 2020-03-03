import React, { useState } from "react";
import { Modal, Button, Row, Col } from "react-bootstrap";
import { addTag } from "../../actions/tag";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
const AddTags = ({ show, onHide, addTag, history }) => {
  const [formData, setFormData] = useState({
    tag: ""
  });

  const onChange = e =>
    setFormData({ ...formData, tag: e.target.value.toLowerCase() });

  const handleSubmit = e => {
    e.preventDefault();

    addTag(formData, history);

    setFormData({ ...formData, tag: "" });

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
        <Modal.Title id="contained-modal-title-vcenter">Add Tag</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <small className="px-3">
          Add a Tag More Than 3 Characters, Less Than 30
        </small>
        <div className="container">
          <Row>
            <Col sm={6}>
              <form onSubmit={e => handleSubmit(e)}>
                <div className="rounded">
                  {/* <label htmlFor="addtag">Add Tag</label> */}
                  <input
                    type="text"
                    name="addtag"
                    className="form-control"
                    placeholder="Enter Tag Name"
                    onChange={e => onChange(e)}
                    required
                  />
                </div>
                <button className="btn btn-secondary mt-3" type="submit">
                  Add Tag
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

export default connect(null, { addTag })(withRouter(AddTags));
