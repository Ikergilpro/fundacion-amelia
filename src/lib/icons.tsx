import type { LucideIcon } from "lucide-react";
import {
  Activity,
  Binoculars,
  BookOpen,
  Building2,
  ClipboardList,
  Coins,
  Compass,
  Cpu,
  Dumbbell,
  Eye,
  GraduationCap,
  HandHelping,
  Handshake,
  HeartHandshake,
  Home,
  Map,
  MessageCircle,
  MessagesSquare,
  Microscope,
  PersonStanding,
  Phone,
  Route,
  Scale,
  School,
  ShieldCheck,
  Sparkles,
  Sprout,
  Tablet,
  Users,
} from "lucide-react";
import type { IconName } from "@/types/content";
import { cn } from "@/lib/utils";

const icons: Record<IconName, LucideIcon> = {
  compass: Compass,
  "message-circle": MessageCircle,
  sprout: Sprout,
  "graduation-cap": GraduationCap,
  users: Users,
  tablet: Tablet,
  binoculars: Binoculars,
  activity: Activity,
  "heart-handshake": HeartHandshake,
  "messages-square": MessagesSquare,
  "person-standing": PersonStanding,
  handshake: Handshake,
  "shield-check": ShieldCheck,
  scale: Scale,
  "book-open": BookOpen,
  sparkles: Sparkles,
  map: Map,
  phone: Phone,
  "building-2": Building2,
  cpu: Cpu,
  dumbbell: Dumbbell,
  microscope: Microscope,
  home: Home,
  school: School,
  "hand-helping": HandHelping,
  coins: Coins,
  "clipboard-list": ClipboardList,
  eye: Eye,
  route: Route,
};

type IconProps = {
  name: IconName;
  className?: string;
  size?: number;
};

export function Icon({ name, className, size = 24 }: IconProps) {
  const Cmp = icons[name];
  return (
    <Cmp
      size={size}
      className={cn("shrink-0", className)}
      aria-hidden="true"
      strokeWidth={1.75}
    />
  );
}
