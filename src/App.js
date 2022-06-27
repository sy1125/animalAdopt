import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./pages/Home";
import Sale from "./pages/Sale";
import Adopt from "./pages/Adopt";
import Interest from "./pages/Interest";
import Button from './components/Button';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Button text={"버튼"} onClick={()=>alert("버튼클릭")} type={"positive"} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sale" element={<Sale />} />
          <Route path="/adopt/:id" element={<Adopt />} />
          <Route path="/interest" element={<Interest />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
