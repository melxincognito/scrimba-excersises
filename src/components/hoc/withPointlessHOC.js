import React from "react";

export function withPointlessHOC(component) {
  const Component = component;

  return function (props) {
    return <Component {...props} />;
  };
}

/**component thats giving an example of a higher order
 * component and how it's able to take in props. Doesn't do anything special
 * when you import it into your App.js
 */
