import ProfilePage from "./pages/Profile/ProfilePage";
import Clock from "./pages/Clock/Clock";
// import Home from "./pages/Passenger/Home";
import Homes from "./pages/PassengerV2/homes";
import Count from "./pages/Hooks/count";
import Simple from "./pages/Simple/Simple";
import { mockUsers } from "./mockData";
import "./App.css";

function App() {
  return (
    <>
      <ProfilePage users={mockUsers} />
      <Clock />
      {/* <div className="App" style={{ marginBottom: "10em" }}>
        <Home />
      </div> */}
      <div>
        <Count />
      </div>
      <div className="App" style={{ marginBottom: "10em" }}>
        <Homes />
      </div>
      {/* <div>
        <Homes />
      </div> */}
      <div>
        <Simple />
      </div>
    </>
  );
}

export default App;
