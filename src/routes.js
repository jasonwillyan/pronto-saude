import { BrowserRouter, Route, Routes as RoutesList } from "react-router-dom";
import Login from "./pages/login/Login";
import UserHome from "./pages/user-home/UserHome";

export default function Routes() {
  return (
    <BrowserRouter>
      <RoutesList>
        <Route exact path="/" element={<Login />} />
        <Route path="home" element={<UserHome />} />
      </RoutesList>
    </BrowserRouter>
  );
}
