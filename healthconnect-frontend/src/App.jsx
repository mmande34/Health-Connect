import { Routes, Route } from "react-router-dom";
import RootLayout from "./layouts/RootLayout";
import Home from "./pages/Home";
import Trials from "./pages/Trials";
import About from "./pages/About";
import NotFound from "./pages/NotFound";

export default function App() {
  return (
    <Routes>
      {/* Shared layout (navbar + footer) */}
      <Route element={<RootLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/trials" element={<Trials />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
