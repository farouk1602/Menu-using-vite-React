import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Pages/Home";
import Products from "./components/Pages/Products";
import Reports from "./components/Pages/Reports";
import Team from "./components/Pages/Team";
import Messages from "./components/Pages/Messages";
import Support from "./components/Pages/Support";


export default function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" Component={Home}/>
        <Route path="/products" Component={Products}/>
        <Route path="/reports" Component={Reports}/>
        <Route path="/team" Component={Team}/>
        <Route path="/messages" Component={Messages}/>
        <Route path="/support" Component={Support}/>
      </Routes>
    </Router>
  );
}
