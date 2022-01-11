import React from "react";

export function withExtraPropAdded(component) {
  const Component = component;

  return function (props) {
    return (
      <Component anotherProp="bounjour je suis Mel Incögnito" {...props} />
    );
  };
}

/**
 * Component thats given an extra prop to the higher order component.
 * Doesn't do anything initially but if you console.log(props) in App.js
 * it'll appear in the console.
 */
