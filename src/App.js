import "./App.css";

import { withExtraPropAdded } from "./components/withExtraPropAdded";
function App(props) {
  console.log(props);
  return (
    <div>
      <h1>Hello world! </h1>
    </div>
  );
}

const PointlessHOC = withExtraPropAdded(App);
export default PointlessHOC;
