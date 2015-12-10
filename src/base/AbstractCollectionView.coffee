Marionette = require 'backbone.marionette'

class AbstractCollectionView extends Marionette.CollectionView

    App:()->
        return window.App

module.exports = AbstractCollectionView
