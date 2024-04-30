
export type IconSize = "sm" | "md" | "bg" | "xl";

export interface IconProps {
  src: string;
  size?: IconSize
  rounded?: boolean;
  fill?: boolean;
}