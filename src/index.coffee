require "normalize.css"
require './style/main.scss'

$ = require 'jquery'

$ -> $('body').append '<h1>product page.</h1>'

console.log 'load'
