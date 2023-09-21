import "./App.css";
import PublicRoute from "./components/PublicRoute";
import PrivateRoute from "./components/PrivateRoute";
import { AuthProvider } from "./contexts/AuthContext";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";

function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/" element={ <PublicRoute> <SignIn /> </PublicRoute> }></Route>
        <Route path="/home" element={ <PrivateRoute> <Home /> </PrivateRoute> } ></Route>
      </Routes>
    </AuthProvider>
  );
}

export default App;
