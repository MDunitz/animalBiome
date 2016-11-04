import React, { Component } from 'react';
import kittySniffing from '../../../styles/assets/kittySniffing.png';
import healthSurvey from '../../../styles/assets/healthSurvey.png';
import labPhoto from '../../../styles/assets/labPhoto.png';
import catLaptop from '../../../styles/assets/catLaptop.png';
class Science extends Component {
  render(){
    return(
      <div className="works">
        <h2>How it Works</h2>
        <div className="col-md-3">
          <h3>Collect a sample and send it back to us.</h3>
          <img src={kittySniffing}/>  
        </div>
        <div className="col-md-3">
          <h3>Fill out the health survey.</h3>
          <img src={healthSurvey}/>
        </div>
        <div className="col-md-3">
          <h3>We extract DNA and sequence your sample.</h3>
          <img src={labPhoto}/>
        </div>
        <div className="col-md-3">
          <h3>Explore your results on our website.</h3>
          <img src={catLaptop}/>
        </div>
      </div>
    );
  };
};


export default Science