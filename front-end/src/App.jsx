import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Home from "./components/Home";
import List from "./components/crud/List";
import Create from "./components/crud/Create";
import Update from "./components/crud/Update";
import Delete from "./components/crud/Delete";
import Detail from "./components/crud/Detail";
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <nav>
            <Link to="/">Home</Link>
            <Link to="/list">List</Link>
            <Link to="/create">Create</Link>
            <Link to="/update">Update</Link>
            <Link to="/detail">Detail</Link>
            <Link to='/delete'>Delete</Link>
          </nav>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/list" element={<List />}/>
            <Route path="/create" element={<Create />}/>
            <Route path="/update/:id" element={<Update />}/>
            <Route path="/detail/:id" element={<Detail />}/>
            <Route path="/delete/:id" element={<Delete />}/>
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
