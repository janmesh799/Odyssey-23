import Navbar from "./Components/Navbar/Navbar";
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import Explore from "./Components/Explore/Explore";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <div
        style={{
          overflow: "hidden",
          position: "fixed",
          zIndex: "10",
          width: "100%",
        }}
      >
        <Navbar />
      </div>
      <div style={{ paddingTop: "4em" }}>
        <Home />
        <About />
        <Explore />
        <Footer />
      </div>
    </div>
  );
}

export default App;
