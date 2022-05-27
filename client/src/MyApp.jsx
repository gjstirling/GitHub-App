import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import FindLanguage from "./components/FindLanguage";
import EmptyState from "./components/Home";
import NavBar from "./components/NavBar";

export function MyApp() {
  return (
    <div id="app">
    
      <Router>
      <NavBar/>
        <Routes>
          <Route path="/" element={<EmptyState />}></Route>
          <Route path="/guess" element={<FindLanguage />}></Route>
        </Routes>
      </Router>
    </div>
  );
}
