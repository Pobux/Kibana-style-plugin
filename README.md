# Kibana style customization

This is a Kibana plugin to inject gradiant's custom css to kibana.


## Compatibility
This plugin is known to work in Kibana 5.5.2 and Kibana 6.1.3. For other versions change *index.js* and pray.

## Install
You should modify Kibana's *src/ui/views/ui_app.jade* in order to add the custom css to kibana's main html:
Replace line `bundleFile('commons.style.css')` by `bundleFile('commons.style.css'),bundleFile('gradiant_style.style.css')`.
```
sed -i "s/bundleFile('commons.style.css')/bundleFile('commons.style.css'),bundleFile('gradiant_style.style.css')/g" /usr/share/kibana/src/ui/views/ui_app.jade
```

## Uninstall

### Kibana 6.x and 5.x
bin/kibana-plugin remove gradiant_style
