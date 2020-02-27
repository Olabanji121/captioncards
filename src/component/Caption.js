import React, {useState} from 'react'
import CaptionItem  from './CaptionItem'
import { Button, ButtonToolbar} from 'react-bootstrap'
import AddTag from './AddTags'
import AddCaption from './AddCaption'

const Caption = () => {
    const [tagModalShow, setTagModalShow] = useState(false);
    const [captionModalShow, setCaptionModalShow] = useState(false);


    return (
        <>
            <ButtonToolbar>
               
                <Button variant='primary' onClick={()=> setTagModalShow(true)}>
                    Add Tag
                </Button>

                
                <AddTag show={tagModalShow} onHide={()=> setTagModalShow(false)}/>
            </ButtonToolbar>
            <div className="mt-3">
            <ButtonToolbar>
            <Button variant='primary' onClick={()=> setCaptionModalShow(true)}>
                    Add Caption
                </Button>
                <AddCaption show={captionModalShow} onHide={()=> setCaptionModalShow(false)}/>
            </ButtonToolbar>
            </div>
            
           <CaptionItem/> 
        </>
    )
}

export default Caption
