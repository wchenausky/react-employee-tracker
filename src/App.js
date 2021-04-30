import "./App.css";
import Jumbotron from "./components/Jumbotron";
import SearchBar from "./components/SearchBar";
import TableHtml from "./components/TableHtml";
import 'bootstrap/dist/css/bootstrap.min.css';

import "./App.css"

function App() {
  return (
    <div className="App">
      <Jumbotron />
        <SearchBar />
        <TableHtml />
    </div>
  );
}

export default App;
