import { BrowserRouter, Route, Routes } from "react-router-dom";
import Top from "./pages/Top";
import Quiz from "./pages/Quiz";
import Add from "./pages/New";
import Header from "./components/Header";

function App() {
  return (
    <>
    <Header/>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Top />} />
        <Route path="play" element={<Quiz />} />
        <Route path="add" element={<Add />} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
