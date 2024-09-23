import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignUp from "./pages/SignUp";
import LogIn from "./pages/LogIn";

function App() {
  return (
    <>
      <BrowserRouter>
        <h1 className="main_heading">Reusable-Form</h1>
        <Routes>
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<LogIn />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
