import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import Home from "./components/home";
import Detail from "./components/Detail";
import Addlocation from "./components/location/Addlocation";
import Addcity from "./components/location/Addcity";
import Header from "./components/Header";
import Cities from "./components/Cities";
import Citydetail from "./components/city/Citydetail";
import Nopage from "./components/Nopage";
function App() {
  return (
    <div className="App">
      <Header/>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route path="location/:id" element={<Detail />} />
          <Route path="city/:id" element={<Citydetail />} />
          <Route path="addlocation" element={<Addlocation />} />
          <Route path="addcity" element={<Addcity />} />
          <Route exact path="/city" element={<Cities/>} />
          <Route exact path="*" element={<Nopage/>} />
          </Routes>
          </Router>
          </div>
  );
}

export default App;
