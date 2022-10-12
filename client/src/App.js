import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import NoFeedbackPage from "./pages/NoFeedbackPage";
import CreateFeedBack from "./pages/CreateFeedBack";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/nofeedback" element={<NoFeedbackPage />}></Route>
          <Route path="/create" element={<CreateFeedBack />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
