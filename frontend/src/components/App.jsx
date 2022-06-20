import React from "react";
import {render} from "react-dom";
import Home from "./Home";
import Index from "./crud/Index"
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
                         <Link to="index">Index</Link>
                    </navbar>
                    <Routes>
                         <Route path="/" element={<Home />} />
                         <Route path="/index" element={<Index />}/>
                    </Routes>
               </div>
          </Router>
     );
}
export default App;
const appDiv = document.getElementById('app');
render(<App/>, appDiv)