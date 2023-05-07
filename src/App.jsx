import "./App.css";
import Home from "./pages/home";
import Login from "./pages/Login";
import Dashboard from "./pages/dashboard/Dashboard";
import Transactions from "./components/transactions/Transactions";
import List from "./pages/list/List";
import { BrowserRouter as Router } from "react-router-dom";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />

      <Route path="/login" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />}>
        <Route index element={<Dashboard />} />
      </Route>
      <Route path="transactions">
        <Route index element={<List />} />
        <Route path="transactions" element={<Transactions />} />
      </Route>
    </Routes>
  );
}

export default App;
