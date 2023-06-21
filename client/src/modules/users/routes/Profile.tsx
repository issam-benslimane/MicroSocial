import { useParams } from "react-router-dom";
import { SplitScreen } from "../../common/components/layout/SplitScreen";
import { Posts } from "../../posts";
import { UserAvatar } from "../components/UserAvatar";
import { useGetUser } from "../hooks/";
import { RelationshipButton, Relationships } from "../../relashionships";
import { useAuth } from "../../auth";
import { User } from "../types";

export const Profile = () => {
  const userId = useParams().userId as string;
  const currentUser = useAuth().user as User;
  const { data: user, status } = useGetUser(userId);

  if (status === "idle") return null;
  if (status === "error") return null;
  if (status === "loading") return null;

  return (
    <SplitScreen>
      <div className="flex flex-col gap-3">
        <div className="flex gap-2">
          <UserAvatar size="md" avatarUrl={user.avatarUrl} />
          <p className="text-xl">{user.name}</p>
        </div>
        <Relationships userId={userId} />
      </div>
      <div className="flex flex-col gap-5">
        <RelationshipButton userId={userId} currentUserId={currentUser.id} />
        <Posts userId={userId} />
      </div>
    </SplitScreen>
  );
};
