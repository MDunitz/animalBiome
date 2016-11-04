import React, { Component } from 'react';
import Graph from '../../../styles/assets/graph.png';

class Data extends Component {
  render(){
    return(
      <div className="data">
        <h2 className="dataText">DATA</h2>
        <img className="graph" src={Graph}/><br/><br/>
        <button className="button"><a href='http://codap.concord.org/releases/latest/static/dg/en/cert/index.html#shared=15599'>Play with the Data</a></button>
      </div>
    );
  };
};


export default Data

