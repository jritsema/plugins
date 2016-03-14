plugins
=======

Plugins for Freeboard.io

### datasource plugins

- [freeboard.io-node.js](/datasources/plugin_nodejs_sample/README.md) (This is a datasource plugin to connect freeboard.io dashboards to real-time node.js servers)

- loader (Add this datasource plugin to be able to load different dashboard.json files in realtime by sending an http post with the dashboard to load, for example, POST event/change-dashboard/dashboard.js.  The plugin also supports remotely reloading the page by posting to event/reload. Note that it requires a socket.io server to push messages to the datasource)
```
$ curl -X POST http://localhost:9000/event/change-dashboard/dashboard
```

### widget plugins

- handlebars (author widgets using [handlebars templates](http://handlebarsjs.com))
  - see [starter template](https://github.com/jritsema/freeboard-handlebars-widget) to make things easier
  - see [repo](https://github.com/jritsema/freeboard-handlebars) for more info

- reactjs (author widgets using [react](http://reactjs.com))
  - see [starter template](https://github.com/jritsema/freeboard-react-widget) to make things easier

- jqplot (author graph/chart based widgets using [jqPlot](http://www.jqplot.com))
  - see [repo](https://github.com/jritsema/freeboard-jqplot) for more info
