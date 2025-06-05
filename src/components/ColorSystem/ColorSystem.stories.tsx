import React from 'react';

export default {
  title: 'Design System/Color System',
};

const tokens = [
  { name: '--color-primary', label: 'Primary' },
  { name: '--color-secondary', label: 'Secondary' },
  { name: '--color-tertiary', label: 'Tertiary' },
  { name: '--color-success', label: 'Success' },
  { name: '--color-info', label: 'Info' },
  { name: '--color-warning', label: 'Warning' },
  { name: '--color-error', label: 'Error' },
  { name: '--color-white', label: 'White' },
  { name: '--color-black', label: 'Black' },
  { name: '--color-gray-100', label: 'Gray 100' },
  { name: '--color-gray-200', label: 'Gray 200' },
  { name: '--color-gray-300', label: 'Gray 300' },
  { name: '--color-gray-400', label: 'Gray 400' },
  { name: '--color-gray-500', label: 'Gray 500' },
  { name: '--color-gray-600', label: 'Gray 600' },
  { name: '--color-gray-700', label: 'Gray 700' },
  { name: '--color-gray-800', label: 'Gray 800' },
  { name: '--color-gray-900', label: 'Gray 900' },
  { name: '--color-surface-default', label: 'Surface Default' },
  { name: '--color-surface-muted', label: 'Surface Muted' },
  { name: '--color-surface-hover', label: 'Surface Hover' },
  { name: '--color-border', label: 'Border' },
];

export const ColorTokens = () => (
  <div style={{ display: 'flex', flexWrap: 'wrap', padding: 16 }}>
    {tokens.map(({ name, label }) => (
      <div
        key={name}
        className="color-swatch"
        style={{
          backgroundColor: `var(${name})`,
          color: ['--color-white', '--color-gray-100', '--color-gray-200'].includes(name) ? 'black' : 'white',
        }}
        title={`${label} (${name})`}
      >
        <div>{label}</div>
        <small>{name}</small>
      </div>
    ))}
  </div>
);

ColorTokens.storyName = 'Color Tokens';
ColorTokens.parameters = {
  docs: {
    description: {
      story: `
**Token Naming Conventions:**

- Primary, Secondary, Tertiary colors follow \`--color-primary\`, \`--color-secondary\`, \`--color-tertiary\`.
- Neutral palette with \`--color-gray-xxx\` and \`--color-white\`, \`--color-black\`.
- Semantic colors such as success, info, warning, and error.
- Surface colors represent background layers.
- Supports light & dark theme using \`data-theme\` attribute on root element.

**Accessibility:**

- All colors meet WCAG contrast ratios for readability.
- Use tokens in UI components to maintain consistency and theming.
`,
    },
  },
};
