import React from "react";

export interface StepProps {
  title: string;
  description?: string;
  isActive: boolean;
  isCompleted: boolean;
  stepNumber: number;
  onClick?: () => void;
}

const Step: React.FC<StepProps> = ({
  title,
  description,
  isActive,
  isCompleted,
  stepNumber,
  onClick,
}) => {
  return (
    <button
      onClick={onClick}
      className={`flex items-center cursor-pointer focus:outline-none ${
        isActive ? "text-primary" : "text-neutral-400"
      }`}
      aria-current={isActive ? "step" : undefined}
    >
      <div
        className={`flex items-center justify-center w-8 h-8 rounded-full border-2 
        ${isCompleted ? "bg-primary border-primary text-white" : "border-neutral-400"}`}
      >
        {isCompleted ? (
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            strokeWidth={3}
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        ) : (
          stepNumber
        )}
      </div>
      <div className="ml-3 text-left">
        <p className="font-semibold">{title}</p>
        {description && <p className="text-sm text-neutral-500">{description}</p>}
      </div>
    </button>
  );
};

export default Step;
