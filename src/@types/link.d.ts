
import { HTMLAttributes } from "astro/types";

export type LinkColor = "default" | "primary";

export interface LinkProps {
  href?: string;
  current?: boolean;
  bgColor?: LinkColor;
  textColor?: LinkColor | "white";
  bordered?: boolean;
  filled?: boolean;
  twStyles?: string;
}


export interface LinkElement extends LinkProps {
  label: string;
}