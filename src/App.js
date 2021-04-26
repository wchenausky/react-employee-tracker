import logo from "./logo.svg";
import "./App.css";
import Wrapper from "./components/Wrapper/Wrapper.jsx";
import Header from "./components/Header/Header.jsx";

function App() {
  return (
    <div className="App">
      <Wrapper>
        <Header /> 
      </Wrapper>
    </div>
  );
}

export default App;
