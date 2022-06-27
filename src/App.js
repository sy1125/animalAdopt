import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./pages/Home";
import Sale from "./pages/Sale";
import Adopt from "./pages/Adopt";
import Interest from "./pages/Interest";
import Router from './components/Router';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sale" element={<Sale />} />
          <Route path="/adopt/:id" element={<Adopt />} />
          <Route path="/interest" element={<Interest />} />
        </Routes>
        <Router />
      </div>
    </BrowserRouter>
  );
}

export default App;
