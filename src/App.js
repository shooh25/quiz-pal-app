import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Top from "./pages/Top";
import Quiz from "./pages/Quiz";
import Add from "./pages/Add";

import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "./firebase";
import SignIn from "pages/SignIn";

function App() {
  const [user] = useAuthState(auth); 

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/login"
            element={user ? <Navigate replace to="/" /> : <SignIn />}
          />

          {/* ログイン時 */}
          <Route
            path="/"
            element={user ? <Top /> : <Navigate replace to="/login" />}
          />
          <Route
            path="/play"
            element={user ? <Quiz /> : <Navigate replace to="/login" />}
          />
          <Route
            path="/add"
            element={user ? <Add /> : <Navigate replace to="/login" />}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
