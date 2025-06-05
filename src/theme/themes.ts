export const lightTheme = {
  '--color-primary': '#2563eb',
  '--color-secondary': '#7c3aed',
  '--color-tertiary': '#059669',
  '--color-background': '#ffffff',
  '--color-foreground': '#1f2937',
  '--color-success': '#22c55e',
  '--color-info': '#3b82f6',
  '--color-warning': '#f59e0b',
  '--color-error': '#ef4444',
  '--color-border': '#d1d5db',
};

export const darkTheme = {
  '--color-primary': '#3b82f6',
  '--color-secondary': '#8b5cf6',
  '--color-tertiary': '#10b981',
  '--color-background': '#1f2937',
  '--color-foreground': '#f3f4f6',
  '--color-success': '#4ade80',
  '--color-info': '#60a5fa',
  '--color-warning': '#facc15',
  '--color-error': '#f87171',
  '--color-border': '#374151',
};

export type Theme = typeof lightTheme;
