Marionette = require('backbone.marionette')
Template = require './templates/AppLayout'
HeaderView = require '../HeaderView'
FooterView = require '../FooterView'
ContentView = require '../ContentView'

class AppLayout extends Marionette.LayoutView
  el: 'main'
  template : Template
  regions:
    header:'header',
    content:'#content',
    footer:'footer'

  # se supone que debe de funciona onShow
  onRender:=>
    @header.show new HeaderView()
    @content.show new ContentView()
    @footer.show new FooterView()


module.exports = AppLayout
