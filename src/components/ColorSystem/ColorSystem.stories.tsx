import React from 'react';
import './tokens.css';

export default {
  title: 'Design Tokens/Color System',
};

export const Palette = () => {
  const colors = [
    'primary', 'secondary', 'tertiary',
    'success', 'info', 'warning', 'error',
    'background', 'foreground', 'border',
  ];

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 p-4">
      {colors.map(color => (
        <div key={color} className="space-y-2">
          <div
            className="w-full h-12 rounded"
            style={{ backgroundColor: `var(--color-${color})` }}
          />
          <p className="text-sm text-foreground">--color-{color}</p>
        </div>
      ))}
    </div>
  );
};
