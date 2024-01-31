import { Component } from "react";
import "./App.css"
import elephant from "./images/elephant.jpeg";

export default class AppClass extends Component{
  
  

  render(){
    const images = this.props.imgData;

    return(
      <div id='gir'>
    
   
      {images.map((element) => (
       <img src={element.img} id={element.id}/>
       
      ))};
      </div>
   )
  }

 
  // code here

}
