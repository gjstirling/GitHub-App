import { UserContextProvider } from "./context/UserContext";
import { AppRouter } from "./components/AppRouter";

function App() {
  return (
    <UserContextProvider>
      <AppRouter />
    </UserContextProvider>
  );
}

export default App;
