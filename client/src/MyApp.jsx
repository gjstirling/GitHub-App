import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import EmptyState from "./components/Home";

export function MyApp() {

    return (
        <div id="app">
            <Router>
                <Routes>
                    <Route path="/" element={<EmptyState/>}></Route>
                    <Route path="/fav" element={<h1> Welcome to the favourite language page </h1>}></Route>
                </Routes>
            </Router>
        </div>
    );
}