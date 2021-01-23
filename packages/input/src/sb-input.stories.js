import { html } from "lit-element";
import { withKnobs, withWebComponentsKnobs, text, boolean } from '@open-wc/demoing-storybook';

import '../lib/sb-input.js';

export default {
    component: 'sb-input',
    title: 'Input',
    decorators: [withKnobs, withWebComponentsKnobs],
    parameters: { options: { selectedPanel: 'storybookjs/knobs/panel' } },
};

export const Default = () => {
  return html`
    <sb-input 
      placeholder=${text('placeholder', 'Digite o nome do robô')}
      value=${text('value', '')}
      ?error=${boolean('error', false)}
      ?disabled=${boolean('disabled', false)}
      helperText=${text('helperText', '')}
    ></sb-input>
  `;
};