import { Fragment } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./Components/Nav";
import Sub from "./Components/sub";
function App() {
  return (
    <Fragment>
      <Router>
        <Routes>
          <Route path="/" element={<Nav />} />
          <Route path="/submit" element={<Sub />} />
        </Routes>
      </Router>
    </Fragment>
  );
}

export default App;
