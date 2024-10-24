import { cn } from "../cn";

const Avatar = () => {
  return (
    <img
      src="https://api.dicebear.com/9.x/adventurer/svg?seed=Alexander"
      alt="avatar"
      className={cn("size-11 rounded-full border border-border")}
    />
  );
};

export default Avatar;
