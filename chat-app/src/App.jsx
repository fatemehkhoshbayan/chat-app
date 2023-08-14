import NavBar from "./components/NavBar";
import Welcome from "./components/Welcome";
import "./App.css";

function App() {
  const handleLogIn = () => {
    console.log("Google button clicked");
  };
  return (
    <>
      <div className="App">
        <NavBar handleLogIn={handleLogIn} />
        <Welcome handleLogIn={handleLogIn}/>
      </div>
    </>
  );
}

export default App;
