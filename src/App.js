import "./App.css";
import NavBar from "./components/Navbar";
import TextForm from "./components/TextForm";

function App() {
  return (
    <>
      <NavBar title="TextUtils" aboutText="About" />
      <div className="container my-3">
        <TextForm title="Enter text below" />
      </div>
    </>
  );
}

export default App;
