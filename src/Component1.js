import React from "react";
import "./Component.css";
import { Spring } from 'react-spring/renderprops';

export default function Component1() {
  return (
    <Spring
      from={{ opacity: 0, marginTop: -500}}
      to={{opacity: 1, marginTop: 0}}
    >
      {props => (
        <div style={props}>
          <div className="title container">
            <h1>Voyager</h1>
          </div>
          

        </div>
      )}

    </Spring>
  
   
   
 );
}