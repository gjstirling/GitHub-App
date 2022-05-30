import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Guess from "../pages/Search";
import Home from "../pages/Home";
import NavBar from "./NavBar";
import Login from "../pages/Login";
import ProtectedRoute from "./ProtectedRoute";
import UserCheck from "./UserCheck";

export function AppRouter() {

  return (
      <Router>
        <NavBar />
        <Routes>
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            }
          ></Route>
          <Route
            path="/login"
            element={
              <UserCheck>
                <Login />
              </UserCheck>
            }
          ></Route>
          <Route
            path="/search"
            element={
              <ProtectedRoute>
                <Guess />
              </ProtectedRoute>
            }
          ></Route>
        </Routes>
      </Router>
  );
}
