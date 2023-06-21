import { Divider } from "../../common/components/elements";
import { Link } from "react-router-dom";
import { useGetRelationships } from "../hooks/useGetRelationships";

type RelationshipsProps = {
  userId: string;
};

export const Relationships = ({ userId }: RelationshipsProps) => {
  const { data: relationships, status } = useGetRelationships(userId);

  if (status === "idle") return null;
  if (status === "error") return null;
  if (status === "loading") return null;

  return (
    <div className="flex gap-2 text-sm text-slate-500">
      <Link to={`/users/${userId}/following`}>
        <span className="block font-bold">
          {relationships.following.length}
        </span>
        <span>following</span>
      </Link>
      <Divider vertical />
      <Link to={`/users/${userId}/followers`}>
        <span className="block font-bold">
          {relationships.followers.length}
        </span>
        <span>followers</span>
      </Link>
    </div>
  );
};
