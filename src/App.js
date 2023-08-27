import SignIn from "./Components/feild/SginIN"
import SignUp from "./Components/Log/SginUp";

import {  Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App  bg-slate-200 h-screen flex items-center justify-center">
        <Routes>
          <Route path="/" element={<SignUp/>} />
          <Route path="/signIn" element={<SignIn />} />
        </Routes>
    </div>
  );
}

export default App;
