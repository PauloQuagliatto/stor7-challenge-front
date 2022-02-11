import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

import { AuthProvider } from "../context/AuthContext";
import { ContactsProvider } from "../context/ContactsContext";
import History from "../services/history";
import PrivateRoute from "./PrivateRoute";

import LoginPage from "../pages/LoginPage";
import Redirect from "../pages/Redirect";
import Dashboard from "../pages/Dashboard";

import GlobalStyle from "../styles/global";

const App = () => {
  return (
    <AuthProvider>
      <ToastContainer />
      <GlobalStyle />
      <BrowserRouter history={History}>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/redirect" element={<Redirect />} />
          <Route
            path="/dashboard"
            element={
              <ContactsProvider>
                <PrivateRoute>
                  <Dashboard />
                </PrivateRoute>
              </ContactsProvider>
            }
          />
          <Route
            path="/contact/:id"
            element={
              <PrivateRoute>
                <Dashboard />
              </PrivateRoute>
            }
          />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
};

export default App;
