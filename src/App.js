import React, { lazy } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dash from "./pages/Dash";
import Index from "./pages/DashPages/Index";
import CreatePet from "./pages/DashPages/PetPages/Create";
import CreateUser from "./pages/DashPages/UserPages/Create";
import SignUp from "./pages/SignUp";

const Login = lazy(() => import("./pages/Login"));

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/create" element={<SignUp />} />
          <Route path="/dashboard" element={<Dash />}>
            <Route path="" element={<Index />} />
            <Route path="user">
              <Route path="create" element={<CreateUser />} />
            </Route>
            <Route path="pet">
              <Route path="create" element={<CreatePet />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
