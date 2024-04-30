
import { HTMLAttributes } from "astro/types";

export type LinkColor = "default" | "primary";

export type LinkSize = "sm" | "md" | "bg";

export interface LinkProps {
  href?: string;
  current?: boolean;
  bgColor?: LinkColor;
  textColor?: LinkColor | "white";
  bordered?: boolean;
  filled?: boolean;
  twStyles?: string;
  size?: LinkSize;
}


export interface LinkElement extends LinkProps {
  label: string;
}