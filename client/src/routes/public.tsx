import { Navigate, Route, Routes } from "react-router-dom";
import { AuthRoutes } from "../modules/auth";
import { Landing } from "../modules/misc/routes";

export const PublicRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/auth/*" element={<AuthRoutes />} />
      <Route path="*" element={<Navigate to="/auth/login" replace />} />
    </Routes>
  );
};
