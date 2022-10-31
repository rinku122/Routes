import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Login";
import Navbar from "./Navbar";
import Profile from "./Profile";
import Footer from "./Footer";
import About from "./About";
import Error from "./Error";
import PrivateRoutes from "./PrivateRoutes";
import { useState } from "react";

function App() {
  const [name] = useState("rajesh");
  const [age] = useState(500);

  return (
    <div style={{ textAlign: "center" }} className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route element={<PrivateRoutes name={name} age={age} />}>
            <Route path="/profile" element={<Profile />} />
            <Route path="/about" element={<About />} />
          </Route>

          <Route path="/" exact element={<Login />} />
          <Route path="*" element={<Error />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
