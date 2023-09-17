import ProfilePage from "./pages/Profile/ProfilePage";
import Clock from "./pages/Clock/Clock";
import Home from "./pages/Passenger/Home";
import { mockUsers } from "./mockData";
import "./App.css";

function App() {
  return (
    <>
      <ProfilePage users={mockUsers} />
      <Clock />
      <div className="App" style={{ marginBottom: "10em" }}>
        <Home />
      </div>
    </>
  );
}

export default App;
