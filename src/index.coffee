App = require './App'
Marionette = require 'backbone.marionette'
FastClick = require 'fastclick'
require './application.scss'
require "normalize.css"

options = {}
options.is_live = do -> return if window.location.host.indexOf('localhost') > -1 or window.location.search is '?d' then false else true

#Initialize fastclick
FastClick.attach(document.body)

view = (window or document)

window.Behaviors = {}
Marionette.Behaviors.behaviorsLookup = ()->
    return window.Behaviors

view.App = new App (options)
view.App.start()
