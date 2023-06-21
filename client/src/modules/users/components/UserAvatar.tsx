import clsx from "clsx";
import { HTMLAttributes } from "react";

type UserAvatarProps = HTMLAttributes<HTMLImageElement> & {
  avatarUrl: string;
  size?: "md" | "sm";
};

const sizes = {
  sm: "w-[50px]",
  md: "w-[80px]",
};

export const UserAvatar = ({
  size = "sm",
  avatarUrl,
  className,
}: UserAvatarProps) => {
  return (
    <img
      src={avatarUrl}
      className={clsx("aspect-square", sizes[size], className)}
    />
  );
};
