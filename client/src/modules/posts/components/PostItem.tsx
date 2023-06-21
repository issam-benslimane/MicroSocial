import { Link } from "react-router-dom";
import { Divider } from "../../common/components/elements";
import { fromNow } from "../../common/helpers/formatDate";
import { User, UserAvatar } from "../../users";
import { Post } from "../types";
import { useAuth } from "../../auth";
import Button from "../../common/components/elements/Button";
import { useDeletePost } from "../hooks/useDeletePost";

type PostItemProps = {
  post: Post;
};

export const PostItem = ({ post }: PostItemProps) => {
  const currentUser = useAuth().user as User;
  const mutation = useDeletePost(post.id);
  return (
    <li className="text-sm">
      <div className="flex gap-2 items-start">
        <UserAvatar avatarUrl={post.user.avatarUrl} />
        <div>
          <Link
            to={`/users/${post.user.id}`}
            className="text-blue-600 capitalize"
          >
            {post.user.name}
          </Link>
          <p>{post.content}</p>
          <div className="flex gap-2">
            <p className="text-slate-400">Posted {fromNow(post.createdAt)}.</p>
            {currentUser.id === post.user.id && (
              <Button
                className="text-blue-700 underline"
                onClick={() => mutation.mutate()}
              >
                delete
              </Button>
            )}
          </div>
        </div>
      </div>
      <Divider className="my-2" />
    </li>
  );
};
