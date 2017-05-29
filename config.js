System.config({
  defaultJSExtensions: true,
  transpiler: false,
  paths: {
    "github:*": "jspm_packages/github/*",
    "npm:*": "jspm_packages/npm/*"
  },

  map: {
    "aurelia-pal": "npm:aurelia-pal@1.3.0",
    "aurelia-polyfills": "npm:aurelia-polyfills@1.1.1",
    "moment": "npm:moment@2.17.1",
    "npm:aurelia-polyfills@1.1.1": {
      "aurelia-pal": "npm:aurelia-pal@1.3.0"
    }
  }
});
