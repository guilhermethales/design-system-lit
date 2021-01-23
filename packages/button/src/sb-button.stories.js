import { html } from "lit-element";
import { withKnobs, withWebComponentsKnobs, select, text } from '@open-wc/demoing-storybook';

import '../lib/sb-button.js';

export default {
    component: 'sb-button',
    title: 'Button',
    decorators: [withKnobs, withWebComponentsKnobs],
    parameters: { options: { selectedPanel: 'storybookjs/knobs/panel' } },
};

export const Default = () => {
  return html`
    <sb-button 
      color=${select('color', ['primary', 'warn', 'danger'], 'primary')}
      size=${select('size', ['xsmall', 'small', 'medium', 'large', 'xlarge'], 'medium')}
      variant=${select('variant', ['contained', 'outlined'], 'contained')}
    >
      ${text('text', 'Novo robô')}
    </sb-button>
  `;
};