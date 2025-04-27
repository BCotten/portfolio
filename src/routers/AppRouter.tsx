import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";
import Navigation from "@/components/my-components/Navigation";
import HomePage from "@/pages/HomePage";
import ProjectDetail from "@/pages/ProjectDetail";

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/projects/:id" element={<ProjectDetail />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  )
}