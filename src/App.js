import WrapperLayout from "./components/WrappedLayout";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import Blog from "./pages/Blog";
import Profile from "./pages/Profile";
import Todo from "./pages/Todo";
import Reducer from "./pages/Reducer";
import TutFormik from "./pages/TutFormik";
import ReactToolkit from "./pages/ReactToolkit";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<WrapperLayout></WrapperLayout>}>
            <Route path="/" index element={<Navigate to="/home" />}></Route>
            <Route path="home" element={<Home />}></Route>
            <Route path="blog" element={<Blog />}></Route>
            <Route path="todo" element={<Todo />}></Route>
            <Route path="useReducer" element={<Reducer />}></Route>{" "}
            <Route path="useReducer" element={<Reducer />}></Route>
            <Route path="formik" element={<TutFormik />}></Route>
            <Route path="useToolkit" element={<ReactToolkit />}></Route>
            <Route path="profile/:userid" element={<Profile />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
