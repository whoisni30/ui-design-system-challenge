import React from 'react';
import MultiStepWizard from './MultiStepWizard';

export default {
  title: 'Components/MultiStepWizard',
  component: MultiStepWizard,
};

export const Default = () => <MultiStepWizard />;

// 📁 src/components/AdvancedModal/AdvancedModal.tsx
import React, { useState, useEffect } from 'react';

const AdvancedModal = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
    };
    document.addEventListener('keydown', handleKey);
    return () => document.removeEventListener('keydown', handleKey);
  }, []);

  return (
    <div className="mt-10 text-center">
      <button onClick={() => setOpen(true)} className="bg-tertiary text-white px-4 py-2 rounded">Open Modal</button>

      {open && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white dark:bg-background p-6 rounded-lg shadow-xl w-96 relative animate-fade-in">
            <h2 className="text-lg font-bold mb-2">Advanced Modal</h2>
            <p className="mb-4">This is a modal with ESC support and backdrop.</p>
            <button onClick={() => setOpen(false)} className="bg-error text-white px-4 py-2 rounded">Close</button>
          </div>
        </div>
      )}
    </div>
  );
};
