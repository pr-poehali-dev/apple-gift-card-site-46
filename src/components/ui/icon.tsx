import { LucideIcon } from "lucide-react";
import * as Icons from "lucide-react";

interface IconProps {
  name: keyof typeof Icons;
  fallback?: keyof typeof Icons;
  size?: number;
  className?: string;
}

const Icon = ({
  name,
  fallback = "CircleAlert",
  size = 24,
  className,
}: IconProps) => {
  const LucideIcon = Icons[name] as LucideIcon;
  const FallbackIcon = Icons[fallback] as LucideIcon;

  if (!LucideIcon) {
    return <FallbackIcon size={size} className={className} />;
  }

  return <LucideIcon size={size} className={className} />;
};

export default Icon;
