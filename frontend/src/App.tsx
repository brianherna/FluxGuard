import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Home/Login";
import Register from "./pages/Register";

function App() {
  return (
    <BrowserRouter>

      <Routes>

        {/* HERO PÚBLICO */}
        <Route
          path="/"
          element={<Home />}
        />

        {/* LOGIN */}
        <Route
          path="/login"
          element={<Login />}
        />

        {/* FORMULARIO DE CONTACTO */}
        <Route
          path="/register"
          element={<Register />}
        />

      </Routes>

    </BrowserRouter>
  );
}

export default App;