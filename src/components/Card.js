import React from "react";
import PropTypes from "prop-types";
// Prop types

export default function Card(props) {
  const styles = {
    backgroundColor: props.cardColor,
    height: props.height,
    width: props.width,
  };
  return <div style={styles}></div>;
}

Card.propTypes = {
  cardColor: PropTypes.oneOf(["blue", "red", "purple"]).isRequired,
  height: PropTypes.number.isRequired,
  width: PropTypes.number.isRequired,
};

// isRequired checks if there's any props specified, whether by
// default props or by inline specification

// use prop types until you learn how to write your applications in TypeScript

Card.defaultProps = {
  height: 100,
  width: 100,
};

// https://reactjs.org/docs/typechecking-with-proptypes.html#proptypes
// docs for typechecking
// npm install prop-types

/**
 *
 * Code ran in App.js
 *
 * <Card cardColor='blue' height={200} width={100} />
 * <Card cardColor='purple' height={100} width={200} />
 * <Card cardColor='red' height={300} width={100} />
 * <Card cardColor='purple />
 *
 *
 */
