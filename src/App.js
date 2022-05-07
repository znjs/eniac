import "./App.css";
import { NavBar } from "./components";
import { UserProfile } from "./pages";

function App() {
  return (
    <div className="bg-background h-screen text-gray-50">
      <NavBar />
      <UserProfile />
    </div>
  );
}

export default App;
