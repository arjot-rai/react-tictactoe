import React, {useState} from "react";
import ReactDOM from "react-dom";

function Square(props) {

  return(
    <button className="square" onClick={() => props.onClick()}>
      {props.val}
    </button>
  );
}

export default Square;