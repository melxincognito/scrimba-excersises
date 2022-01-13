import React from "react";
import { withToggler } from "../../HOCS/withToggler";

function Menu(props) {
  return (
    <div>
      <button onClick={props.toggle}>{props.on ? "Hide" : "Show"} Menu</button>
      <nav style={{ display: props.on ? "block" : "none" }}>
        <h6>Signed in as MelXIncognito</h6>
        <a> Your Profile</a>
        <a> Your Repos</a>
        <a> Your Stars</a>
        <a> Your Gists </a>
      </nav>
    </div>
  );
}

const SuperchargedMenuComponent = withToggler(Menu);
export default SuperchargedMenuComponent;
