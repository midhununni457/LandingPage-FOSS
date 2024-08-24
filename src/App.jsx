import "./App.css";
import LandingPage from "./components/LandingPage";

function App() {
  return (
    <div>
      <img
        src="bg.png"
        alt="Background"
        className="w-full h-screen fixed top-0 left-0 overflow-hidden absolute -z-10"
      />
      <LandingPage />
    </div>
  );
}

export default App;
