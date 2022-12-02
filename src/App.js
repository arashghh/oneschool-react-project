import "./App.css";
import Home from "./components/Home";
import Header from "./components/Header";
import Courses from "./components/Courses";

function App() {
  return (
    <div className='App'>
      <Header />
      <Home />
      <Courses />
    </div>
  );
}

export default App;
