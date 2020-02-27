import React from 'react'
import {Modal, Button, Row, Col,Form} from 'react-bootstrap'


const AddCaption = (props) => {


    const handleSubmit =(e)=>{
        e.preventDefault()

        alert(e.target.addCaption.value)
        
    }
    return (
        <Modal
        {...props}
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
                        <Form onSubmit={(e)=>handleSubmit(e)}>
                            <Form.Group controlId="addCaption">
                               <Form.Label>Add Caption</Form.Label>
                               <Form.Control
                                
                                type="text"
                                name="addCaption"
                                required
                                placeholder="Add Caption"
                               
                               />
                            </Form.Group>
                            <Form.Group>
                                <Button varient="primary" type="submit">
                                    Add Caption
                                </Button>
                            </Form.Group>
                        </Form>
                    </Col> 
                </Row> 
            </div>
          
        </Modal.Body>
        <Modal.Footer>
          <Button variant='danger' onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    )
}

export default AddCaption
