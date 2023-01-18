import Header from "./components/Header";
import "./App.css";
import "../src/sass/main.scss";
import Home from "./pages/Home";
import Footer from "./components/Footer";
function App() {
  return (
    <div>
      <Header />
      <div>
        <Home />
      </div>
      <Footer />
    </div>
  );
}

export default App;
