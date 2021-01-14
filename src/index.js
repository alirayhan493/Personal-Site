import react from "react";
import ReactDOM from "react-dom";
import "./index.css"
import JWeb from "./jweb"
import SocialFollow from "./socialFollow"




function App() {
 return (
  <div className="App">
   <JWeb />
  </div>
  
 );
}

function App2() {
 return (
  <div className="socials">
   <SocialFollow />
  </div>
  
 );
}

const rootElement = document.getElementById("container");
const footerElement = document.getElementById("footer")
ReactDOM.render(<App />, rootElement);
ReactDOM.render(<App2 />, footerElement);

//var destination = document.querySelector("#container")
//ReactDOM.render(
 //<div>
  
 //</div>,
 //destination
//);