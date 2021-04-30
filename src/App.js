import "./App.css";
import Jumbotron from "./components/Jumbotron";
import SearchBar from "./components/SearchBar";
import TableHtml from "./components/TableHtml";
import TableData from "./components/TableData";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Jumbotron />
      <SearchBar />
      <TableHtml />
      <TableData />
    </div>
  );
}

export default App;
