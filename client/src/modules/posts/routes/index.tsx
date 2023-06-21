import { Route, Routes } from "react-router-dom";
import { Feed } from "./Feed";

export const PostsRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Feed />} />
    </Routes>
  );
};
