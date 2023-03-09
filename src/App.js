import "./App.css";
import About from "./components/About";
import NavBar from "./components/Navbar";
import TextForm from "./components/TextForm";

function App() {
  return (
    <>
      <NavBar title="TextUtils" aboutText="About" />
      <div className="container my-3">
        {/* <TextForm title="Enter text below" /> */}
        <About />
      </div>
    </>
  );
}

export default App;
