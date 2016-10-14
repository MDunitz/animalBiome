import React, { Component } from 'react';



class Quotes extends Component {
  render(){
    return (
      <div className="row press">
        <div className="col-md-3">
          <h3>CATSTER</h3>
          <p>
            <a href="http://www.catster.com/lifestyle/your-cats-poop-might-help-save-lives-kittybiome">
              this type of research is bleeding edge
            </a>
          </p>
        </div>
        <div className="col-md-3">
          <h3>WIRED.uk</h3>
          <p>
            <a href="http://www.wired.co.uk/news/archive/2015-05/15/kittybiome-cat-dna-sequencing">
              find out why your cat is grumpy by sequencing its DNA
            </a>
          </p>
        </div>
        <div className="col-md-3">
          <h3>POPULAR SCIENCE</h3>
          <p>
            <a href="http://www.popsci.com/decode-your-kittys-microbiome">
              first project to look into the feline microbiome
            </a>
          </p>
        </div>
        <div className="col-md-3">
          <h3>SCIENCE</h3>
          <p>
            <a href="https://www.sciencemag.org/news/sifter/kittybiome-kickstarter-fund-research-cat-microbes">
            citizen-science research on the microbiome of cats
            </a>
          </p>
        </div>
      </div> 
    );
  };
};

export default Quotes