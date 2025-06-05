import React, { useState } from "react";
import Step from "./Step";

interface WizardStep {
  title: string;
  description?: string;
  content: React.ReactNode;
  optional?: boolean;
  validate?: () => boolean;
}

interface MultiStepWizardProps {
  steps: WizardStep[];
  onComplete: () => void;
}

const MultiStepWizard: React.FC<MultiStepWizardProps> = ({ steps, onComplete }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [completedSteps, setCompletedSteps] = useState<number[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const step = steps[currentStep];

  const goNext = async () => {
    setError(null);
    if (step.validate && !step.validate()) {
      setError("Please fix errors before proceeding.");
      return;
    }
    setLoading(true);
    await new Promise((r) => setTimeout(r, 500)); // simulate async
    setLoading(false);

    if (!completedSteps.includes(currentStep)) {
      setCompletedSteps([...completedSteps, currentStep]);
    }

    if (currentStep === steps.length - 1) {
      onComplete();
    } else {
      setCurrentStep(currentStep + 1);
    }
  };

  const goPrevious = () => {
    setError(null);
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const skipStep = () => {
    setError(null);
    if (step.optional) {
      setCompletedSteps([...completedSteps, currentStep]);
      if (currentStep === steps.length - 1) {
        onComplete();
      } else {
        setCurrentStep(currentStep + 1);
      }
    }
  };

  const jumpToStep = (index: number) => {
    setError(null);
    setCurrentStep(index);
  };

  return (
    <div className="max-w-3xl mx-auto p-4 bg-background-surface2 dark:bg-background-surface3 rounded-lg shadow-md">
      {/* Progress Indicator */}
      <nav className="flex space-x-4 mb-6" aria-label="Progress">
        {steps.map((s, idx) => (
          <Step
            key={idx}
            stepNumber={idx + 1}
            title={s.title}
            description={s.description}
            isActive={currentStep === idx}
            isCompleted={completedSteps.includes(idx)}
            onClick={() => jumpToStep(idx)}
          />
        ))}
      </nav>

      {/* Step Content */}
      <div className="mb-4 min-h-[150px]">
        {loading ? (
          <div
            role="status"
            aria-live="polite"
            className="flex justify-center items-center h-40"
          >
            <svg
              className="animate-spin h-10 w-10 text-primary"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              ></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8v8H4z"
              ></path>
            </svg>
          </div>
        ) : (
          step.content
        )}
      </div>

      {/* Error Message */}
      {error && <p className="text-error mb-2">{error}</p>}

      {/* Navigation Buttons */}
      <div className="flex justify-between">
        <button
          className="px-4 py-2 rounded bg-neutral-300 dark:bg-neutral-700 hover:bg-neutral-400 dark:hover:bg-neutral-600 text-neutral-900 dark:text-neutral-100 disabled:opacity-50"
          onClick={goPrevious}
          disabled={currentStep === 0 || loading}
          aria-disabled={currentStep === 0 || loading}
        >
          Previous
        </button>
        <div className="space-x-2">
          {step.optional && (
            <button
              className="px-4 py-2 rounded bg-warning text-white hover:bg-warning/80 disabled:opacity-50"
              onClick={skipStep}
              disabled={loading}
            >
              Skip
            </button>
          )}
          <button
            className="px-4 py-2 rounded bg-primary text-white hover:bg-primary/80 disabled:opacity-50"
            onClick={goNext}
            disabled={loading}
          >
            {currentStep === steps.length - 1 ? "Finish" : "Next"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default MultiStepWizard;
