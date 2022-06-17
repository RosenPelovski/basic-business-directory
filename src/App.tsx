import React from "react";
import { BrowserRouter as Router, Routes, Route, } from "react-router-dom";
import Header from "./components/Header";
import "./App.css";
import ListView from "./pages/ListView";
import CompanyView from "./pages/CompanyView/CompanyView";

function App() {
  return (
    <Router>
      <div className="App">
        <Header appName={'LOGO'} />
        <Routes>
          <Route path="/" element={<ListView />}></Route>
          <Route path="/details" element={<CompanyView />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
