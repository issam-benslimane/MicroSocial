import { Route, Routes } from "react-router-dom";
import { Followers } from "./Followers";
import { Following } from "./Following";

export const RelationshipsRoutes = () => {
  return (
    <Routes>
      <Route path="followers" element={<Followers />} />
      <Route path="following" element={<Following />} />
    </Routes>
  );
};
