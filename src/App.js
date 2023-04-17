
import "./App.css";
import Info from "./components/info";
import About from "./components/about";
import Footer from "./components/footer";
import Interest from "./components/interests";
function App() {
  return <div className="App">
  <div className="card">

      <Info />
      <About />
      <Interest />
      <Footer />
  </div>
    </div>
}

export default App;
