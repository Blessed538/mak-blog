import Header from "./components/Header";
import "./App.css";
import "../src/sass/main.scss";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import { Route, Routes } from "react-router-dom";
import Article from "./pages/Article";
function App() {
  return (
    <div className="app">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:teamId" element={<Article />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
