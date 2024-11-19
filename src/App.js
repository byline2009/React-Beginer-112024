import WrapperLayout from "./components/WrappedLayout";
import logo from "./logo.svg";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import Blog from "./pages/Blog";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<WrapperLayout></WrapperLayout>}>
            <Route path="/" index element={<Navigate to="/home" />}></Route>
            <Route path="home" element={<Home />}></Route>
            <Route path="blog" element={<Blog />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
