import logo from "./logo.svg";
import "./App.css";
import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, BrowserRouter as Router } from "react-router-dom";
import Home from "./components/home";
import JobsPage from "./components/jobsPage";
import NavBar from "./components/NavBar";
import JobDetails from "./components/jobdetails";
import Favorites from "./components/favorites";

function App() {
  return (
    <div className='App'>
      <Router>
        <NavBar />
        <Route path='/' exact>
          <Home />
        </Route>
        <Route path='/jobs' exact>
          <JobsPage />
        </Route>
        <Route path='/jobDetails' exact>
          <JobDetails />
        </Route>
        <Route path='/favorites' exact>
          <Favorites />
        </Route>
      </Router>
    </div>
  );
}

export default App;
