import Navbar from "./Components/Navbar/Navbar";
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import Explore from "./Components/Explore/Explore";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <div style={{ color: "#333", backgroundColor: "#f2f2f5",overflow:"hidden",fontFamily: "'Lato', sans-serif" }} className="App">
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
      <div style={{ paddingTop: "3em", }}>
        <Home />
        <About />
        <Explore />
        <Footer />
      </div>
    </div>
  );
}

export default App;
