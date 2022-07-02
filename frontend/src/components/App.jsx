import * as React from "react";
import {render} from "react-dom";
import Home from "./Home";
import Delete from "./crud/Delete";
import List from "./crud/List";
import Create from "./crud/Create";
import Update from "./crud/Update";
import Detail from "./crud/Detail";
import {
     BrowserRouter as Router,
     Routes,
     Route,
     Link
} from "react-router-dom";

const App = () => {
     return (
          <Router>
               <div>
                    <navbar>
                         <Link to="/">Home</Link>
                         <Link to="/list">List</Link>
                         <Link to="/create">Create</Link>
                         <Link to="/update">Update</Link>
                         <Link to="/detail">Detail</Link>
                         <Link to='/delete'>Delete</Link>
                    </navbar>
                    <Routes>
                         <Route exact path="/" element={<Home />} />
                         <Route path="/list" element={<List />}/>
                         <Route path="/create" element={<Create />}/>
                         <Route path="/update" element={<Update />}/>
                         <Route path="/detail" element={<Detail />}/>
                         <Route path="/delete" element={<Delete />}/>
                    </Routes>
               </div>
          </Router>
     );
}
export default App;
const appDiv = document.getElementById('app');
render(<App/>, appDiv)