import React from "react";

export default {
  title: "Design System/Color System",
};

export const ColorTokens = () => {
  return (
    <div className="p-6 bg-neutral-100 dark:bg-neutral-900 min-h-screen">
      <h1 className="text-3xl font-bold mb-6 text-primary dark:text-primary">
        Token-Based Color System
      </h1>
      <div className="grid grid-cols-3 gap-6 max-w-4xl">
        {[
          { name: "Primary", varName: "--color-primary" },
          { name: "Secondary", varName: "--color-secondary" },
          { name: "Tertiary", varName: "--color-tertiary" },
          { name: "Success", varName: "--color-success" },
          { name: "Info", varName: "--color-info" },
          { name: "Warning", varName: "--color-warning" },
          { name: "Error", varName: "--color-error" },
          { name: "Neutral 100", varName: "--color-neutral-100" },
          { name: "Neutral 500", varName: "--color-neutral-500" },
          { name: "Neutral 900", varName: "--color-neutral-900" },
          { name: "Surface 1", varName: "--color-background-surface1" },
          { name: "Surface 2", varName: "--color-background-surface2" },
          { name: "Surface 3", varName: "--color-background-surface3" },
        ].map(({ name, varName }) => (
          <div key={varName} className="flex items-center space-x-4">
            <div
              style={{ backgroundColor: `var(${varName})` }}
              className="w-16 h-16 rounded shadow-md border border-neutral-400"
              aria-label={`${name} color token`}
              role="img"
            />
            <div>
              <p className="font-semibold">{name}</p>
              <code className="text-sm text-neutral-700 dark:text-neutral-300">{varName}</code>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
