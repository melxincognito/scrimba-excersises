import React, { Component } from "react";
import { withToggler } from "../../HOCS/withToggler";

class Menu extends Component {
  render() {
    return (
      <div>
        <button onClick={this.props.toggle}>
          {this.props.on ? "Hide" : "Show"} Menu
        </button>
        <nav style={{ display: this.props.on ? "block" : "none" }}>
          <h6>Signed in as MelXIncognito</h6>
          <a> Your Profile</a>
          <a> Your Repos</a>
          <a> Your Stars</a>
          <a> Your Gists </a>
        </nav>
      </div>
    );
  }
}

const SuperchargedMenuComponent = withToggler(Menu);
export default SuperchargedMenuComponent;
