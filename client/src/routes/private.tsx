import { Navigate, Route, Routes } from "react-router-dom";
import { PostsRoutes } from "../modules/posts";
import { UsersRoutes } from "../modules/users";

export const PrivateRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/feed" replace />} />
      <Route path="/auth/*" element={<Navigate to="/feed" replace />} />
      <Route path="/feed/*" element={<PostsRoutes />} />
      <Route path="/users/*" element={<UsersRoutes />} />
    </Routes>
  );
};
