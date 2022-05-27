import "./App.css";
import { UserContextProvider } from "./context/UserContext";
import { MyApp } from "./MyApp";

function App() {
  return (
    <UserContextProvider>
      <MyApp />
    </UserContextProvider>
  );
}

export default App;
