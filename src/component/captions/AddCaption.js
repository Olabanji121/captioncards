import React, {useState} from 'react'
import {Modal, Button, Row, Col} from 'react-bootstrap'
import { connect } from "react-redux";
import { withRouter} from 'react-router-dom'
import {addCaption} from '../../actions/captions'


const AddCaption = ({ show, onHide, addCaption , history}) => {

  const [formData, setFormData] = useState({
    caption: ""
  });

  const onChange = e =>
  setFormData({ ...formData, caption: e.target.value });

const handleSubmit = e => {
  e.preventDefault();

  addCaption(formData, history)

  setFormData({ ...formData, caption:''})

  console.log(formData);

  onHide()
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
            Add Caption
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>

            <div className="container">
                <Row>
                    <Col sm={6}>
                    <form onSubmit={e => handleSubmit(e)}>
                <div className="rounded">
                  {/* <label htmlFor="addcaption">Add Caption</label> */}
                  <input
                    type="text"
                    name="addcaption"
                    
                    className="form-control"
                    placeholder="write your Caption"
                    onChange={e => onChange(e)}
                    required
                  />
                </div>
                <button className="btn btn-secondary mt-3" type="submit">Add Caption</button>
              </form>
                    </Col> 
                </Row> 
            </div>
          
        </Modal.Body>
        <Modal.Footer>
          <Button variant='danger' onClick={onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    )
}

export default connect(null, {addCaption}) (withRouter (AddCaption))
