/* eslint-disable no-mixed-spaces-and-tabs */
import React, { Component, ReactElement } from "react";

class NewApp extends Component {
  label = "Here's another heading!";

  handleClick = () : void => {
  	alert("Secret message, hehe");
  }

  public render() : ReactElement {
  	return (
    	<div className="NewApp">
    		<h1 onClick={this.handleClick}>{this.label}</h1>
    		<p>Here is a final paragraph.</p>
    	</div>
  	);
  }
}

export default NewApp;
  