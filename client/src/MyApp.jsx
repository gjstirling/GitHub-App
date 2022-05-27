import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Guess from "./components/Guess";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Login from "./components/Login";
import ProtectedRoute from "./components/ProtectedRoute";
import UserCheck from "./components/UserCheck";

export function MyApp() {

  return (
    <div id="app">
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
            path="/Login"
            element={
              <UserCheck>
                <Login />
              </UserCheck>
            }
          ></Route>
          <Route
            path="/guess"
            element={
              <ProtectedRoute>
                <Guess />
              </ProtectedRoute>
            }
          ></Route>
        </Routes>
      </Router>
    </div>
  );
}
