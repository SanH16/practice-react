import ProfilePage from "./pages/Profile/ProfilePage";
import Clock from "./pages/Clock/Clock";
// import Home from "./pages/Passenger/Home";
import Homes from "./pages/PassengerV2/homes";
import Count from "./pages/Hooks/count";
import Simple from "./pages/Simple/Simple";
import ProfileUser from "./pages/PassengerV2/component/profile-user";
import FormPage from "./pages/Form/form-page";

// redux
import HomePage from "./pages/PassengerRedux/home-page";
import ProfileRedux from "./pages/PassengerRedux/components/profile-redux";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "./pages/PassengerRedux/store/store";

//router
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { mockUsers } from "./mockData";
import "./App.css";
import FormPageTesting from "./pages/Testing/FormPageTesting";
import Search from "./pages/Testing/Search";
import Charts from "./pages/Charts";
import Rechart from "./pages/Recharts/Rechart";
import RechartSimple from "./pages/Recharts/RechartSimple";
import RechartV2 from "./pages/Recharts/RechartV2";
import Toast from "./pages/Toast";

const AppProvider = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Routes>
          <Route path="/" element={<Homes />} />
          <Route path="/profile/:nama" element={<ProfileUser />} />
          <Route path="/page" element={<ProfilePage users={mockUsers} />} />
          <Route path="/clock" element={<Clock />} />
          <Route path="/count" element={<Count />} />
          <Route path="/simple" element={<Simple />} />
          <Route path="/form-page" element={<FormPage />} />

          {/* redux */}
          <Route path="/redux" element={<HomePage />} />
          <Route path="/redux/profile/:nama" element={<ProfileRedux />} />

          {/* testing */}
          <Route path="/testing" element={<FormPageTesting />} />
          <Route path="/testing/search" element={<Search />} />

          {/* Charts */}
          <Route path="/charts" element={<Charts />} />
          <Route path="/recharts" element={<Rechart />} />
          <Route path="/recharts-simple" element={<RechartSimple />} />
          <Route path="/recharts-v2" element={<RechartV2 />} />

          {/* Toast */}
          <Route path="/toast" element={<Toast />} />
        </Routes>
      </PersistGate>
    </Provider>
  );
};

function App() {
  return (
    <Router>
      <AppProvider />
    </Router>
  );
}

export default App;
