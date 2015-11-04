class MainController

  index:()=>
    @setPageTitle("Home")

  dashboard:()=>
    @setPageTitle("Dashboard")

  setPageTitle: (sub=null) ->

    title = App.data.name + " - " + sub
    if window.document.title isnt title then window.document.title = title
    return null
    
module.exports = MainController
