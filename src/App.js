import { lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
// import Home from "./Home/Home";
import NavBar from "./NavBar/NavBar";
import Profile from "./Student/Profile";
import ProfileLayout from "./Student/ProfileLayout";
import Study from "./Student/Study";


const Home = lazy(() => import('./Home/Home'));
function App() {



  return (
    <BrowserRouter>
    <NavBar/>
    <Suspense fallback={<div>Loading...</div>}></Suspense>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/student-profile" element={<ProfileLayout/>} >
          <Route index element={<Profile/>} />
          <Route path="study" element={<Study/>} />
          <Route path="class" element={<Profile/>} />
          <Route path="notes" element={<Profile/>} />
          <Route path="test" element={<Profile/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
