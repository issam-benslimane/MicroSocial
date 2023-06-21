import { useParams } from "react-router-dom";
import { SplitScreen } from "../../common/components/layout/SplitScreen";
import { User, UserAvatar, UsersList, useGetUser } from "../../users";
import { Relationships } from "../components/Relationships";
import { useGetRelationships } from "../hooks/useGetRelationships";
import { useAuth } from "../../auth";
import { RelationshipButton } from "../components/RelationshipButton";

export const Following = () => {
  const userId = useParams().userId as string;
  const relashionshipsQuery = useGetRelationships(userId);
  const userQuery = useGetUser(userId);
  const user = useAuth().user as User;

  if (
    relashionshipsQuery.status !== "success" ||
    userQuery.status !== "success"
  )
    return null;

  return (
    <SplitScreen>
      <div className="flex flex-col gap-3">
        <div className="flex gap-2">
          <UserAvatar size="md" avatarUrl={userQuery.data.avatarUrl} />
          <p className="text-xl">{userQuery.data.name}</p>
        </div>
        <Relationships userId={userId} />
      </div>
      <div className="flex flex-col gap-5">
        <RelationshipButton userId={userId} currentUserId={user.id} />
        <div>
          <h2 className="text-2xl mb-5">Followers</h2>
          <UsersList users={relashionshipsQuery.data.following} />
        </div>
      </div>
    </SplitScreen>
  );
};
