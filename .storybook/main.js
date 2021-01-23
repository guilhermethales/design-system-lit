module.exports = {
  stories: [
    '../packages/**/src/*.stories.js',
  ],
  addons: [
    'storybook-prebuilt/addon-docs/register.js',
    'storybook-prebuilt/addon-actions/register.js',
    'storybook-prebuilt/addon-knobs/register.js',
    'storybook-prebuilt/addon-a11y/register.js',
    'storybook-prebuilt/addon-backgrounds/register.js',
    'storybook-prebuilt/addon-links/register.js',
    'storybook-prebuilt/addon-viewport/register.js',
  ],
  esDevServer: {
    nodeResolve: true,
    watch: true,
    open: true,
  },
};
