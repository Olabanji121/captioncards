import React from 'react'
import {Modal, Button, Row, Col,Form} from 'react-bootstrap'


const AddTags = (props) => {

    const handleSubmit =(e)=>{
        e.preventDefault()

        alert(e.target.addtag.value)
        
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
            Add Tags
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>

            <div className="container">
                <Row>
                    <Col sm={6}>
                        <Form onSubmit={(e)=>handleSubmit(e)}>
                            <Form.Group controlId="addtag">
                               <Form.Label>Add Tag</Form.Label>
                               <Form.Control
                                
                                type="text"
                                name="addtag"
                                required
                                placeholder="Add Tag"
                               
                               />
                            </Form.Group>
                            <Form.Group>
                                <Button varient="primary" type="submit">
                                    Add Tag
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

export default AddTags
