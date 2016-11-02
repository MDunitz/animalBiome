// import React, { Component } from 'react';
// import { connect } from 'react-redux';
// import * as actions from '../../actions';
// import OrderDoggyKit from './doggyKits';
// import OrderKittyKit from './kittyKits';

// class OrderKit extends Component {
//   constructor(props){
//     super(props);
//     //initalize local state 
//     this.handleSubmit = this.handleSubmit.bind(this);
//     console.log("props", this.props)
//     this.state = {doggyKits: 0, kittyKits: 0, cost:0};
//     console.log("state", this.state);
//     this.handleDogUserInput = this.handleDogUserInput.bind(this);
//     this.handleCatUserInput = this.handleCatUserInput.bind(this)

//   }

//   handleDogUserInput(doggyKits){
//     let dogCost = (doggyKits)*99;
//     let catCost = this.state.kittyKits *99;
//     let cost = dogCost + catCost;
//     this.setState({
//       doggyKits: doggyKits,
//       cost: cost
//     })
//   }
//   handleCatUserInput(kittyKits){
//     let catCost = (kittyKits) *99;
//     let dogCost = this.state.doggyKits*99;
//     let cost = catCost + dogCost;
//     this.setState({
//       kittyKits: kittyKits,
//       cost: cost
//     })
//   }
//   handleSubmit(event){
//     alert("pooooooooooop")
//     console.log("event", event)
//     console.log("state", this.state)
//     event.preventDefault();
//     console.log("WHOOOP submitted")

//     //TODO
//       //route to purchase page
//       //pass number of both kits to purchase page
//   }

//   componentWillMount(){

//     var scriptURL = 'https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js';
//     if (window.ShopifyBuy && window.ShopifyBuy.UI) {
//       ShopifyBuyInit();
//     }else {
//       var script = document.createElement('script');
//       script.async = true;
//       script.src = scriptURL;
//       (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(script);
//       script.onload = ShopifyBuyInit;
//     }

//     function ShopifyBuyInit() {
//       var client = ShopifyBuy.buildClient({
//         domain: 'animal-biome.myshopify.com',
//         apiKey: '1eb4c18b732761453f03eb35197e9c96',
//         appId: '6',
//       });

//       ShopifyBuy.UI.onReady(client).then(function (ui) {
//         ui.createComponent('product', {
//           id: [8286319945],
//           moneyFormat: '${{amount}}',
//           options: {"product":{"buttonDestination":"cart","layout":"vertical","variantId":"all","width":"240px","contents":{"img":true,"title":true,"variantTitle":false,"options":true,"price":true,"description":false,"buttonWithQuantity":false,"button":true,"quantity":false},"text":{"button":"ADD TO CART"},"styles":{"product":{"@media (min-width: 601px)":{"max-width":"100%","margin-left":"0","margin-bottom":"50px"}},"button":{"background-color":"#78b657","color":"#ffffff","font-family":"Helvetica Neue, sans-serif","font-size":"15px","padding-top":"16px","padding-bottom":"16px","padding-left":"26px","padding-right":"26px","border":"none",":hover":{"background-color":"#5f9d3e","color":"#ffffff"},"border-radius":"3px"},"variantTitle":{"font-family":"Helvetica Neue, sans-serif","font-size":"14px","color":"#4c4c4c"},"title":{"font-family":"Helvetica Neue, sans-serif","font-weight":"bold","font-size":"18px","color":"#4c4c4c"},"description":{"color":"#4c4c4c","font-size":"14px","font-family":"Helvetica Neue, sans-serif"},"price":{"font-family":"Helvetica Neue, sans-serif","font-size":"14px","color":"#4c4c4c"},"quantityInput":{"font-size":"16px","padding-top":"16px","padding-bottom":"16px","color":"#4c4c4c"},"compareAt":{"font-size":"12px"}}},"cart":{"contents":{"title":true,"lineItems":true,"footer":true,"button":true},"text":{"title":"Cart","total":"Total","notice":"Shipping and discount codes are added at checkout.","button":"CHECKOUT"},"styles":{"button":{"background-color":"#78b657","color":"#ffffff","font-family":"Helvetica Neue, sans-serif","font-size":"16px","padding-top":"16px","padding-bottom":"16px","padding-left":"26px","padding-right":"26px","border":"none",":hover":{"background-color":"#5f9d3e","color":"#ffffff"},"border-radius":"3px"},"cart":{"background-color":"#ffffff"},"footer":{"background-color":"#ffffff"},"title":{"color":"#4c4c4c"},"close":{":hover":{}}}},"modalProduct":{"contents":{"img":true,"title":true,"variantTitle":false,"options":true,"price":true,"description":true,"buttonWithQuantity":false,"button":true,"quantity":false},"text":{"button":"ADD TO CART"},"styles":{"product":{"@media (min-width: 601px)":{"max-width":"100%","margin-left":"20px","margin-bottom":"50px"}},"button":{"background-color":"#78b657","color":"#ffffff","font-family":"Helvetica Neue, sans-serif","font-size":"15px","padding-top":"16px","padding-bottom":"16px","padding-left":"26px","padding-right":"26px","border":"none",":hover":{"background-color":"#5f9d3e","color":"#ffffff"},"border-radius":"3px"},"variantTitle":{"font-family":"Helvetica Neue, sans-serif","font-size":"14px","color":"#4c4c4c"},"title":{"font-family":"Helvetica Neue, sans-serif","font-weight":"bold","font-size":"26px","color":"#4c4c4c"},"description":{"color":"#4c4c4c","font-size":"14px","font-family":"Helvetica Neue, sans-serif"},"price":{"font-family":"Helvetica Neue, sans-serif","font-size":"14px","color":"#4c4c4c"},"quantityInput":{"font-size":"16px","padding-top":"16px","padding-bottom":"16px","color":"#4c4c4c"}}},"productSet":{"styles":{"products":{"@media (min-width: 601px)":{"margin-left":"-20px"}}}},"toggle":{"styles":{"toggle":{"font-family":"Helvetica Neue, sans-serif","background-color":"#78b657",":hover":{"background-color":"#5f9d3e"}}}},"modal":{"styles":{"modal":{"background-color":"#ffffff"}}},"option":{"styles":{"label":{"font-family":"Helvetica Neue, sans-serif","font-weight":"normal","color":"#4c4c4c"},"select":{"font-family":"Helvetica Neue, sans-serif","font-weight":"normal","color":"#4c4c4c"}}}}
//         });
//       });
//     }
//   }

//   // render(){
//   //   return(
//   //     <div>
//   //     <form >
//   //       <OrderDoggyKit
//   //        onUserInput={this.handleDogUserInput}
//   //        />
//   //       <OrderKittyKit
//   //       onUserInput={this.handleCatUserInput}
//   //       />
//   //       <br/>
//   //       <br/>
//   //       <button action={this.handleSubmit}>Order kits</button>
//   //     </form>
//   //     <div>Cost = {this.state.cost} </div>
//   //     </div>
//   //   )
//   // }

//   render(){
//     return(
//       <div>JFDJF
//       {product}
//       </div>
//     )
//   }
// }

// export default OrderKit