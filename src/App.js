import "./App.css";

import { withFavoriteNumber } from "./components/withFavoriteNumber";

function App(props) {
  console.log(props);

  return (
    <div>
      <h1>Hello world! </h1>
      <h1> {props.favoriteNumber} </h1>
    </div>
  );
}

const FavoriteNumberHOC = withFavoriteNumber(App);
export default FavoriteNumberHOC;

// Reference favoriteNumber as the props in order to have it display on the screen.
// Not { withFavoriteNumber.props } or { props.withFavoriteNumber }
// Reference the actual prop you NAMED inside of the HOC
