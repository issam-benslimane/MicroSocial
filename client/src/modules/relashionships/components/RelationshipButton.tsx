import Button from "../../common/components/elements/Button";
import { User } from "../../users";
import { useFollow } from "../hooks/useFollow";
import { useGetRelationships } from "../hooks/useGetRelationships";
import { useUnfollow } from "../hooks/useUnfollow";

type Props = {
  currentUserId: string;
  userId: string;
};

export const RelationshipButton = ({ currentUserId, userId }: Props) => {
  if (currentUserId === userId) return null;

  const { data: relationships, status } = useGetRelationships(userId);
  if (status !== "success") return null;

  return isFollower(currentUserId, relationships.followers) ? (
    <UnfollowButton userId={userId} />
  ) : (
    <FollowButton userId={userId} />
  );
};

const FollowButton = ({ userId }: { userId: string }) => {
  const mutation = useFollow(userId);

  return (
    <Button
      variant="primary"
      loading={mutation.isLoading}
      onClick={() => mutation.mutate()}
    >
      Follow
    </Button>
  );
};

const UnfollowButton = ({ userId }: { userId: string }) => {
  const mutation = useUnfollow(userId);

  return (
    <Button
      variant="primary"
      loading={mutation.isLoading}
      onClick={() => mutation.mutate()}
    >
      Unfollow
    </Button>
  );
};

function isFollower(followerId: string, followers: User[]) {
  return followers.some((user) => user.id === followerId);
}
