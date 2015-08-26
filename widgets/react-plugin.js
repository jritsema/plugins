(function () {

  var ReactWidget = function (settings) {

    var self = this;
    var currentSettings = settings;
    var mountPoint;
    var reactClass;
    var data;

    this.render = function (element) {
      mountPoint = element;
    }

    this.onSettingsChanged = function (newSettings) {
      currentSettings = newSettings;
    }

    this.onCalculatedValueChanged = function (settingName, newValue) {

      if (settingName === 'data')
        data = newValue;

      if (settingName === 'code')
        reactClass = newValue;

      //only render the react component if we have both code and data
      if (reactClass && data) {
        var reactData = { data: data };
        React.render(React.createElement(reactClass, reactData), mountPoint);
      };
    }

    this.onDispose = function () {
    }

    this.getHeight = function () {
      return Number(currentSettings.height);
    }

    this.onSettingsChanged(settings);
  };

  freeboard.loadWidgetPlugin({
    "type_name": "ReactWidget",
    "display_name": "React",    
    "fill_size": true,
    "external_scripts": [
      "https://cdnjs.cloudflare.com/ajax/libs/react/0.12.2/react.min.js"
      //"https://cdnjs.cloudflare.com/ajax/libs/react/0.12.2/react.js"
    ],    
    "settings": [
      {
        "name": "code",
        "display_name": "Component",
        "type": "calculated",
        "description": ""
      },     
      {
        "name": "data",
        "display_name": "Data",
        "type": "calculated",
        "description": ""
      },         
      {
        "name": "height",
        "display_name": "Height Blocks",
        "type": "number",
        "default_value": 4,
        "description": "A height block is around 60 pixels"
      }
    ],
    newInstance: function (settings, newInstanceCallback) {
      newInstanceCallback(new ReactWidget(settings));
    }
  });

}());