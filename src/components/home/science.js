import React, { Component } from 'react';
import howItWorks from '../../../styles/assets/howItWorks.png'


class Science extends Component {
  render(){
    return(
      <div id="howitworks" className="works">
        <img src={howItWorks}/>
      </div>
    );
  };
};


export default Science