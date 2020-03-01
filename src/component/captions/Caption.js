import React, {useState} from 'react'
import CaptionList  from './CaptionList'
import { Button, ButtonToolbar} from 'react-bootstrap'

import AddCaption from './AddCaption'

const Caption = () => {
   
    const [captionModalShow, setCaptionModalShow] = useState(false);


    return (
        <>
            
            <div className="mt-3">
            <ButtonToolbar>
            <Button variant='primary' onClick={()=> setCaptionModalShow(true)}>
                    Add Caption
                </Button>
                <AddCaption show={captionModalShow} onHide={()=> setCaptionModalShow(false)}/>
            </ButtonToolbar>
            </div>
            
           <CaptionList/> 
        </>
    )
}

export default Caption
