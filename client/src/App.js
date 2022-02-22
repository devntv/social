import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import Homepage from "./pages/homepage";
import Login from "./pages/login";
// import Register from "./pages/register";
// import Login from "./pages/login";
import RenderPage from "./RenderPage";

function App() {
  return (
    <Router>
      <div className="App">
        <div className="main">
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/:page" element={<RenderPage />} />
            <Route path="/:page/:id" element={<RenderPage />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
