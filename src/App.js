import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import MainPage from "./page/MainPage";
import Login from "./page/Login";
import NavBar from "./component/NavBar";
import PrivateRoute from "./route/PrivateRoute";
import { useSelector } from "react-redux";

// 1. Pages: main, Log in, item detail
// 2. Main page shows all items.
// 3. Log in page shows when clicking the log in button.
// 4. If not logged in, clicking an item shows the log in page.
// 5. If logged in, clicking an item shows the item detail page.
// 6. When logged in, the log in button switches into log out button which has log out function.
// 7. Items can be searched with keywords.

function App() {
  const authenticate = useSelector((state) => state.auth.authenticate);
  useEffect(() => {
    console.log("Authenticate:", authenticate);
  }, [authenticate]);
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<MainPage />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/item/:id" element={<PrivateRoute />}></Route>
      </Routes>
    </div>
  );
}

export default App;
