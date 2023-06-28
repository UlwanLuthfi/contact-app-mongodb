import { Link, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import AddContact from "./pages/AddContact";
import EditContact from "./pages/EditContact";

function App() {
  return (
    <div>
      <Link to="/">Home</Link>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="contact/add" element={<AddContact />} />
        <Route path="contact/edit" element={<EditContact />} />
      </Routes>
    </div>
  );
}

export default App;
