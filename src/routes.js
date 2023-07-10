import { BrowserRouter, Route, Routes as RoutesList } from "react-router-dom";
import Login from "./pages/login";
import UserHome from "./pages/user-home";
import Profile from "./pages/profile";
import NewProcedure from "./pages/new-procedure";
import EditProcedure from "./pages/edit-procedure";

export default function Routes() {
  return (
    <BrowserRouter>
      <RoutesList>
        <Route exact path="/" element={<Login />} />
        <Route path="home" element={<UserHome />} />
        <Route path="profile" element={<Profile />} />
        <Route path="new-procedure" element={<NewProcedure />} />
        <Route path="edit-procedure" element={<EditProcedure />} />
      </RoutesList>
    </BrowserRouter>
  );
}
