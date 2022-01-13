import React, { Component } from "react";

// HOC is a function that takes a component as a parameter
// and returns a new component wrapping the goven component
// and supercharges it by giving it extra capabilities

class Toggler extends Component {
  //toggler state being initially set to false is going to
  //automatically hide your menu on screen start and automatically
  //have the favorites switch set to off on start

  // if you change it from being a boolean to this.props.defaultOnValue and pass
  // it in as a prop you can choose for each component it's passed through whether you
  // need it to be set to true or false so it's not just false for every component
  // unless that's what you want.

  state = {
    on: this.props.defaultOnValue,
  };

  toggle = () => {
    this.setState((prevState) => {
      return {
        on: !prevState.on,
      };
    });
  };

  render() {
    const Component = this.props.component;
    return (
      <Component on={this.state.on} toggle={this.toggle} {...this.props} />
    );
  }
}
export function withToggler(component, optionsObj) {
  return function (props) {
    return (
      <Toggler
        component={component}
        defaultOnValue={optionsObj.defaultOnValue}
        {...props}
      />
    );
  };
}
