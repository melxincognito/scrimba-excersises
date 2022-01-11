import "./App.css";
import RoundedImg from "./components/RoundedImg";

function App() {
  return (
    <div className="App">
      <RoundedImg
        src="https://picsum.photos/id/237/300/300"
        borderRadius="10px"
      />
      <RoundedImg
        src="https://i.pinimg.com/originals/d7/1d/66/d71d663c070a4b26ecfd6f70a92c37cb.jpg"
        borderRadius="15px"
      />
    </div>
  );
}

export default App;
