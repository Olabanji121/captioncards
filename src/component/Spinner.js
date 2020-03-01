import React, {Fragment} from 'react';
import spinner from './img/loader.gif';

const Spinner = () => {
    return (
        <Fragment>
            <div className="col-10 mx-auto col-md-6 text-center mt-5">
            <img src={spinner} alt="loading...." style={{width:'200px',margin:'auto', display:'block', paddingTop:'100px'}}/>
          </div>
           
        </Fragment>
    )
} 

export default Spinner