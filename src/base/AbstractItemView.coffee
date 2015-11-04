Marionette = require 'backbone.marionette'

class AbstractItemView extends Marionette.ItemView

  App:()->
    return window.App

module.exports = AbstractItemView
