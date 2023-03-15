import { lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
// import Home from "./Home/Home";
import NavBar from "./NavBar/NavBar";
import HelpSomeone from "./Student/HelpSomeone";
import Notes from "./Student/Notes";
import Profile from "./Student/Profile";
import ProfileLayout from "./Student/ProfileLayout";
import Skills from "./Student/Skills";
import Study from "./Student/Study";
import Test from "./Student/Test";


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
          <Route path="notes" element={<Notes/>} />
          <Route path="test" element={<Test/>} />
          <Route path="skills" element={<Skills/>} />
          <Route path="help-someone" element={<HelpSomeone/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
