import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import NavBar from "./components/navbar/NavBar.jsx";
import Left from "./components/left/Left.jsx";
import Right from "./components/right/Right.jsx";
import About from "./components/footer/About.jsx";
import Footer from "./components/footer/Footer.jsx";

function App() {
  return (
    <div className="App">
      <NavBar />
      <div className="row pt-3">
        <div className="col-sm-3 ml-2">
          <Left />
        </div>
        <div className="col-sm-8 ml-3">
          <Right />
        </div>
      </div>
      <About />
      <Footer />
    </div>
  );
}

export default App;
