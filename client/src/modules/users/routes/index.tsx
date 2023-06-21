import { Route, Routes } from "react-router-dom";
import { RelationshipsRoutes } from "../../relashionships";
import { Profile } from "./Profile";
import { Users } from "./Users";

export const UsersRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Users />} />
      <Route path="/:userId">
        <Route index element={<Profile />} />
        <Route path="*" element={<RelationshipsRoutes />} />
      </Route>
    </Routes>
  );
};
