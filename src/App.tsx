import React, { useState } from 'react';
import { useTheme } from './theme/useTheme';
import MultiStepWizard from './components/MultiStepWizard/MultiStepWizard';
import AdvancedModal from './components/AdvancedModal/AdvancedModal';

const App = () => {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  useTheme(theme);

  const toggleTheme = () => {
    setTheme(prev => (prev === 'light' ? 'dark' : 'light'));
  };

  return (
    <div className="min-h-screen bg-[var(--color-background)] text-[var(--color-foreground)] transition-colors">
      <header className="p-4 flex justify-between items-center border-b border-[var(--color-border)]">
        <h1 className="text-xl font-bold">Design System Demo</h1>
        <button
          onClick={toggleTheme}
          className="bg-[var(--color-primary)] text-white px-4 py-2 rounded"
        >
          Toggle {theme === 'light' ? 'Dark' : 'Light'} Mode
        </button>
      </header>

      <main className="p-4 space-y-10">
        <section>
          <h2 className="text-lg font-semibold mb-4">Multi Step Wizard</h2>
          <MultiStepWizard />
        </section>

        <section>
          <h2 className="text-lg font-semibold mb-4">Advanced Modal</h2>
          <AdvancedModal />
        </section>
      </main>
    </div>
  );
};

export default App;
