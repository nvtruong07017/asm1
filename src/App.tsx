import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./components/Home.tsx";
import LoginPage from "./components/Login.tsx";
import Profile from "./components/Profile.tsx";
import ClientLayout from "./layout/react.tsx";

export default function App() {
 
  return (
    <BrowserRouter>
    <Routes>
        
        <Route path="/login" element={<LoginPage />} />
        <Route path="/profile" element={<Profile />} />

        <Route path="/" element={<ClientLayout />}>
        <Route index element={<HomePage />} />

        </Route>
    </Routes>
  </BrowserRouter>
  );
}