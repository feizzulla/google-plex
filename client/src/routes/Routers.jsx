import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";

import Login from "../pages/Login/Login";
import ErrorPage from "../pages/ErrorPage";
import { useState, useEffect } from "react";
import Dashboard from "../pages/Dashboard";
import Generate from "../pages/Generate";

export default function Routers() {
  const [isAuthenticated, setIsAuthenticated] = useState(true);

  const checkAuth = () => {
    return isAuthenticated;
  };

  const handleUnauthenticatedRedirect = () => {
    return (
      <Navigate
        to="/error"
        replace={true}
        state={{ from: window.location.pathname }}
      />
    );
  };

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={checkAuth() ? <Login /> : handleUnauthenticatedRedirect()}
        />
        <Route
          path="/dashboard"
          element={
            checkAuth() ? <Dashboard /> : handleUnauthenticatedRedirect()
          }
        />
        <Route
          path="/farming"
          element={
            checkAuth() ? <Dashboard /> : handleUnauthenticatedRedirect()
          }
        />
        <Route
          path="/generate"
          element={checkAuth() ? <Generate /> : handleUnauthenticatedRedirect()}
        />
        <Route
          path="/registration"
          element={
            checkAuth() ? <Dashboard /> : handleUnauthenticatedRedirect()
          }
        />
        <Route
          path="/tasks"
          element={
            checkAuth() ? <Dashboard /> : handleUnauthenticatedRedirect()
          }
        />
        <Route
          path="/add"
          element={
            checkAuth() ? <Dashboard /> : handleUnauthenticatedRedirect()
          }
        />
        <Route
          path="/login"
          element={<Login setIsAuthenticated={setIsAuthenticated} />}
        />
        <Route path="/error" element={<ErrorPage />} />
      </Routes>
    </Router>
  );
}
