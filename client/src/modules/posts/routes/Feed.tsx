import { SplitScreen } from "../../common/components/layout/SplitScreen";
import { Posts } from "../../posts";
import { useAuth } from "../../auth";
import { User, UserAvatar } from "../../users";
import { CreatePost } from "../components/CreatePost";

export const Feed = () => {
  const user = useAuth().user as User;

  return (
    <SplitScreen>
      <div className="flex flex-col gap-3">
        <div className="flex gap-2 items-start">
          <UserAvatar size="md" avatarUrl={user.avatarUrl} />
          <p className="text-xl">{user.name}</p>
        </div>
        <CreatePost />
      </div>
      <div className="flex flex-col gap-5">
        <Posts />
      </div>
    </SplitScreen>
  );
};
