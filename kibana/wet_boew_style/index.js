export default function (kibana) {
  return new kibana.Plugin({
   uiExports: {
     app: {
        title: 'wet_boew_style',
        order: -100,
        description: 'Wet BOEW Styling',
        main: 'plugins/wet_boew_style/index.js',
        hidden: true
     }
    }
  });
};
