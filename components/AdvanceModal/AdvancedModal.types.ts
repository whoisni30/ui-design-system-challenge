import { ReactNode } from "react";

export type ModalSize = "sm" | "md" | "fullscreen";
export type ModalAnimation = "fade" | "scale" | "slide";

export interface AdvancedModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: ReactNode;
  size?: ModalSize;
  animation?: ModalAnimation;
  isLoading?: boolean;
  backdropBlur?: boolean;
}
