import { Routes, Route, BrowserRouter as Router } from "react-router-dom";

import Nav from "./components/Nav";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Menu from "./pages/Menu";
import About from "./pages/About";
import BookingPage from "./pages/BookingPage";
import ConfirmedBooking from "./pages/ConfirmedBooking";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Router basename="/">
        <header>
          <img src="https://s2.loli.net/2024/07/24/H8RihdE7TeY3abk.png" alt="header logo" />
        </header>

        <Nav />

        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/about" element={<About />} />
            <Route path="/booking" element={<BookingPage />} />
            <Route path="/confirmed" element={<ConfirmedBooking />} />
          </Routes>
        </main>

        <footer>
          <Footer />
        </footer>
      </Router>
    </div>
  );
}

export default App;
