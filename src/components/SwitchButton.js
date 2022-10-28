import React, {Component} from "react";

const SwitchButton = (props) => {
    return(
    <React.Fragment>
      <button 
      onClick={props.click}>{props.active ? "Stop" : "Start"}</button>

    </React.Fragment>
    )
  }

  export default SwitchButton;