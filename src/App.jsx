import './App.css';



function App(imgData) {
  // code here
  
  const images = imgData.imgData;
  
  
return(
   <div id='ele'>
   {/* <img src={images[0].id} alt="" id={images[0].id} /> */}
    <h1>Kalvium Gallery</h1>
   {images.map((element) => (
    <img src={element.img} id={element.id}/>
    
   ))};
   </div>
)


  


}

export default App;
