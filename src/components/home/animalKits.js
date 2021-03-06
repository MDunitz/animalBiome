import React, { Component } from 'react';
import doggyKitPhoto from '../../../styles/assets/doggyLogo.png';
import kittyKitPhoto from '../../../styles/assets/kittyLogo.png';
import { HashLink } from 'react-router-hash-scroll';
import ReactPlayer from 'react-player';


class AnimalKits extends Component {
  render(){
    return(
      <div className="animalKits">
        
        <div className="doggyKit col-md-4">
          <img className="doggyKitPhoto" src={doggyKitPhoto}/>
          <h3><b>DoggyBiome</b><br/>Microbiome assessment<br/>for dogs</h3>
          <button className="button"><a target="_blank" href="https://animal-biome.myshopify.com/collections/frontpage/products/doggykit">Order Now</a></button>
          <button className="button"><HashLink to="#howitworks">Learn More</HashLink></button>
        </div>
        <div className="kittyKit col-md-4">
          <img className="kittyKitPhoto" src={kittyKitPhoto}/>
          <h3><b>KittyBiome</b><br/>Microbiome assessment<br/>for cats</h3>
          <button className="button"><a target="_blank" href="https://animal-biome.myshopify.com/products/kittykit">Order Now</a></button>
          <button className="button"><HashLink to="#howitworks">Learn More</HashLink></button>
        </div>
        <div className="video col-md-4">
          <ReactPlayer url='https://www.youtube.com/watch?v=EaEoSlcPImU&t=9s'/>
        </div>
      </div>
    );
  };
};


export default AnimalKits