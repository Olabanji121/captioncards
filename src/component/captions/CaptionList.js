import React, {useEffect}  from 'react'
import CaptionItem  from './CaptionItem'
import { connect } from "react-redux";
import {getCaptions} from '../../actions/captions'
import Spinner from '../Spinner'

const CaptionList = ({getCaptions, caption:{captions, loading, newCaption}}) => {

    useEffect(() => {
        getCaptions();
      }, [getCaptions, newCaption]);

      console.log(captions);
      
      if(loading){
        return <Spinner/>
    }
  
    return (
        <div className="container py-5">
        <div className="row">
          <div className="col-10 mx-auto col-md-6 text-center text-uppercase mb-3">
            <h1 className="text-slanted">Caption list</h1>
          </div>
        </div>

        <div className="row">
        {captions.map(caption =>(
                 <CaptionItem key={caption.id} caption={caption.caption} id={caption.id}/>
            ))}
        </div>
      </div>
    )
}

const mapStateToProps = state => ({
    caption: state.caption
  });
  
  export default connect(mapStateToProps, {getCaptions}) (CaptionList);
  
