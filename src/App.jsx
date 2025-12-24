import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation
} from "react-router-dom";
import { useEffect } from "react";

import "./index.css";
import Welcome from "./components/Welcome";
import SignIn from "./components/SignIn";
import CreateAccount from "./components/CreateAccount";
import AccountSettings from "./components/AccountSettings";

function TitleManager() {
  const location = useLocation();

  useEffect(() => {
    switch (location.pathname) {
      case "/":
        document.title = "Welcome | PopX";
        break;
      case "/signin":
        document.title = "Sign In | PopX";
        break;
      case "/create-account":
        document.title = "Create Account | PopX";
        break;
      case "/account-settings":
        document.title = "Account Settings | PopX";
        break;
      default:
        document.title = "PopX";
    }
  }, [location.pathname]);

  return null;
}

function App() {
  return (
    <Router>
      <TitleManager />
      <div className="App">
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/create-account" element={<CreateAccount />} />
          <Route path="/account-settings" element={<AccountSettings />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
