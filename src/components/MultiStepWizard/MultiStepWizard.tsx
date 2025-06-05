import React, { useState } from 'react';
import Step from './Step';

const steps = [
  { title: 'Step 1', content: 'Enter your name' },
  { title: 'Step 2', content: 'Enter your email' },
  { title: 'Step 3', content: 'Confirm your info' },
];

const MultiStepWizard = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({ name: '', email: '' });

  const next = () => setCurrentStep((prev) => Math.min(prev + 1, steps.length - 1));
  const prev = () => setCurrentStep((prev) => Math.max(prev - 1, 0));

  return (
    <div className="max-w-md mx-auto p-4 border rounded space-y-4">
      <div className="flex items-center justify-between">
        {steps.map((step, index) => (
          <div
            key={index}
            className={`flex-1 text-center ${index <= currentStep ? 'text-primary' : 'text-gray-400'}`}
          >
            {step.title}
          </div>
        ))}
      </div>

      <Step
        title={steps[currentStep].title}
        content={steps[currentStep].content}
        formData={formData}
        setFormData={setFormData}
        step={currentStep}
      />

      <div className="flex justify-between">
        <button onClick={prev} disabled={currentStep === 0} className="bg-secondary text-white px-4 py-2 rounded">Previous</button>
        <button onClick={next} disabled={currentStep === steps.length - 1} className="bg-primary text-white px-4 py-2 rounded">Next</button>
      </div>
    </div>
  );
};

export default MultiStepWizard;
