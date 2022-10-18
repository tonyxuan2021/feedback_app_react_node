import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import NoFeedbackPage from "./pages/NoFeedbackPage";
import CreateFeedBack from "./pages/CreateFeedBack";
import EditFeedback from "./pages/EditFeedback";
import SingleFeedbackPage from "./pages/SingleFeedbackPage";
import RoadMapPage from "./pages/RoadMapPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/nofeedback" element={<NoFeedbackPage />}></Route>
          <Route path="/create" element={<CreateFeedBack />}></Route>
          <Route path="/edit" element={<EditFeedback />}></Route>
          <Route path="/feedback/:id" element={<SingleFeedbackPage />}></Route>
          <Route path="/roadmap" element={<RoadMapPage />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
