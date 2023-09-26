import ProfilePage from "./pages/Profile/ProfilePage";
import Clock from "./pages/Clock/Clock";
// import Home from "./pages/Passenger/Home";
import Homes from "./pages/PassengerV2/homes";
import Count from "./pages/Hooks/count";
import Simple from "./pages/Simple/Simple";
import ProfileUser from "./pages/PassengerV2/component/profile-user";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { mockUsers } from "./mockData";
import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homes />} />
        <Route path="/profile/:nama" element={<ProfileUser />} />
        <Route path="/page" element={<ProfilePage users={mockUsers} />} />
        <Route path="/clock" element={<Clock />} />
        <Route path="/count" element={<Count />} />
        <Route path="/simple" element={<Simple />} />
      </Routes>
    </Router>
    // <>
    //   <ProfilePage users={mockUsers} />
    //   <Clock />
    //   <div className="App" style={{ marginBottom: "10em" }}>
    //     <Home />
    //   </div>
    //   <div>
    //     <Count />
    //   </div>

    //   <div className="App" style={{ marginBottom: "10em" }}>
    //     <Homes />
    //   </div>
    //   <div>
    //     <Simple />
    //   </div>
    // </>
  );
}

export default App;
