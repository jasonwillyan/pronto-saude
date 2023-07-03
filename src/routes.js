import { BrowserRouter, Route, Routes as RoutesList } from "react-router-dom";
import Login from "./pages/login";
import UserHome from "./pages/user-home";
import Profile from "./pages/profile";

export default function Routes() {
  return (
    <BrowserRouter>
      <RoutesList>
        <Route exact path="/" element={<Login />} />
        <Route path="home" element={<UserHome />} />
        <Route path="profile" element={<Profile />} />
      </RoutesList>
    </BrowserRouter>
  );
}
