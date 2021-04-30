import "./App.css";
import Jumbotron from "./components/Jumbotron/Jumbotron.jsx";
import SearchBar from "./components/SearchBar/SearchBar.jsx";
import 'bootstrap/dist/css/bootstrap.min.css';

import "./App.css"

function App() {
  return (
    <div className="App">
      <Jumbotron />
        <SearchBar/> 
    </div>
  );
}

export default App;
