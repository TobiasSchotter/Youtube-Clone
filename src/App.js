import React from "react";
import "./App.css";
import Header from "./Components/Header";
import Sidebar from "./Components/Sidebar";
import SearchPage from "./Components/SearchPage";
import RecommendedVideos from "./Components/RecommendedVideos";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import * as data from "./data.json";

function App() {
  console.log(data.videos);
  return (
    <div className="app">
      <Router>
        <Header />
        <Switch>
          <Route path="/search/:searchTerm">
            <div className="app_page">
              <Sidebar></Sidebar>
              <SearchPage />
            </div>
          </Route>
          <Route path="/">
            <div className="app_page">
              <Sidebar></Sidebar>
              <RecommendedVideos></RecommendedVideos>
            </div>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
