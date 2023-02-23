import { BrowserRouter, Route, Routes } from "react-router-dom";
import Top from "pages/Top/Top";
import Quiz from "pages/Quiz/Quiz";
import Add from "pages/Add/Add";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Top />} />
        <Route path="play" element={<Quiz />} />
        <Route path="add" element={<Add />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
