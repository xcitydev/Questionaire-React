import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Main from "./components/main";
import Question from "./components/question";
import Art from "./components/art";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={Main()} />
        <Route path="/question" element={Question()} exact />
        <Route path="/art" element={Art()} exact />
      </Routes>
    </Router>
  );
}

export default App;
