import React, { Component } from 'react';
const Holly = require("../../../styles/assets/Holly.png");
const Alana = require("../../../styles/assets/Alana.png");
const Adrian = require("../../../styles/assets/Adrian.png");
const Alex = require("../../../styles/assets/Alex.png");
const Jennifer = require("../../../styles/assets/Jennifer.png");
const Jonathan = require("../../../styles/assets/Jonathan.png");
const Stan = require("../../../styles/assets/Stan.png");
const Adrien = require("../../../styles/assets/Adrien.png");


class AboutUs extends Component {

  render(){
    return (
      <div id="aboutus" className="row  team container">
        <h2 className="aboutUsText">About Us!</h2>
        <div className="row team">
          <div className="member col-md-3 col-xs-4.5 col-xs-4.5">
            <img className="aboutUsPic" src={Holly}/>
            <h3>Holly Ganz, PhD</h3>
            <h4>Co-founder & CEO</h4>
            <p>Holly is a microbial ecologist who founded the KittyBiome project <a target="_blank" href="https://twitter.com/hollyhganz">@hollyhganz</a></p>
          </div>
          <div className="member col-md-3 col-xs-4.5">
            <img className="aboutUsPic" src={Alana}/>
            <h3>Alana Firl, PhD</h3>
            <h4>Co-founder & CSO</h4>
            <p>Alana holds a PhD in Vision Science from UC Berkeley and a BS in
              Cognitive Neuroscience from Brown University <a target="_blank" href="https://twitter.com/ajfirl">@ajfirl</a></p>
          </div>
          <div className="member col-md-3 col-xs-4.5">
            <img className="aboutUsPic" src={Adrien}/>
            <h3>Adrien Burch, PhD</h3>
            <h4>Chief Microbiome Officer</h4>
            <p>Adrien is a microbiologist turned entrepreneur. This is her second microbiome start-up; she co-founded Gut Wiser at UC Berkeley in 2013.</p>
          </div>
          <div className="member col-md-3 col-xs-4.5">
            <img className="aboutUsPic" src={Alex}/>
            <h3>Alexandra Martin</h3>
            <h4>Chief Lab Technician</h4>
            <p>Alex is an undergraduate at UC Berkeley who has been involved with KittyBiome from the beginning</p>
          </div>
        </div> 
        <div className="team row">
          <div className="member col-md-3 col-xs-4.5">
            <img className="aboutUsPic" src={Jonathan}/>
            <h3>Jonathan Eisen, PhD</h3>
            <h4>Scientific Advisor</h4>
            <p>World-renowned evolutionary biologist and cat enthusiast. Professor/PI at UC Davis <a target="_blank" href="https://twitter.com/phylogenomics">@phylogenomics</a></p>
          </div>
          <div className="member col-md-3 col-xs-4.5">
            <img className="aboutUsPic" src={Jennifer}/>
            <h3>Jennifer Gardy, PhD</h3>
            <h4>Scientific Advisor</h4>
            <p>Leader, Molecular Epidemiology at the BC Center for Disease Control <a target="_blank" href="https://twitter.com/jennifergardy">@jennifergardy</a></p>
          </div>
          <div className="member col-md-3 col-xs-4.5">
            <img className="aboutUsPic" src={Stan}/>
            <h3>Stanley Marks, DVM, PhD</h3>
            <h4>Scientific Advisor</h4>
            <p>World-renowned expert in Small Animal Gastroenterology. Professor/PI at UC Davis School of Veterinary Medicine.</p>
          </div>
          <div className="member col-md-3 col-xs-4.5">
            <img className="aboutUsPic" src={Adrian}/>
            <h3>Adrian Tordiffe, DVM, PhD</h3>
            <h4>Scientific Advisor</h4>
            <p>Senior Lecturer, Faculty of Veterinary Science, University of Pretoria, South Africa <a target="_blank" href="https://twitter.com/AdrianTordiffe">@AdrianTordiffe</a></p>
          </div>
        </div>
      </div>
    );
  };
};


export default AboutUs

