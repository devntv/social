import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import Register from "./pages/register";
// import Login from "./pages/login";
import RenderPage from "./RenderPage";

function App() {
  return (
    <Router>
      <div className="App">
        <div className="main">
          <Routes>
            <Route path="/:page" element={<RenderPage />} />
            <Route path="/:page/:id" element={<RenderPage />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
