import React, { useEffect, useRef } from "react";
import { AdvancedModalProps } from "./AdvancedModal.types";
import classNames from "classnames";

export const AdvancedModal: React.FC<AdvancedModalProps> = ({
  isOpen,
  onClose,
  title,
  children,
  size = "md",
  animation = "fade",
  isLoading = false,
  backdropBlur = false,
}) => {
  const modalRef = useRef<HTMLDivElement>(null);

  // Close on ESC key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const sizeClasses = {
    sm: "w-80",
    md: "w-[32rem]",
    fullscreen: "w-full h-full",
  };

  const animationClasses = {
    fade: "animate-fadeIn",
    scale: "animate-scaleIn",
    slide: "animate-slideIn",
  };

  return (
    <div
      className={classNames(
        "fixed inset-0 z-50 flex items-center justify-center",
        { "backdrop-blur-sm": backdropBlur }
      )}
    >
      <div
        className="fixed inset-0 bg-black bg-opacity-40"
        onClick={onClose}
      />
      <div
        ref={modalRef}
        tabIndex={-1}
        className={classNames(
          "bg-white dark:bg-neutral100 text-black dark:text-white p-6 rounded shadow-lg z-10 relative",
          sizeClasses[size],
          animationClasses[animation]
        )}
      >
        {isLoading && (
          <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center z-20 rounded">
            <div className="animate-spin border-4 border-t-transparent border-white rounded-full w-6 h-6" />
          </div>
        )}
        {title && <h3 className="text-lg font-bold mb-4">{title}</h3>}
        <div className={isLoading ? "opacity-40 pointer-events-none" : ""}>
          {children}
        </div>
        <button
          className="absolute top-2 right-3 text-lg"
          onClick={onClose}
          aria-label="Close modal"
        >
          ✕
        </button>
      </div>
    </div>
  );
};
