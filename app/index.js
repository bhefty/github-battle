let React = require('react')
let ReactDOM = require('react-dom')
let routes = require('./config/routes')
let Raven = require('raven-js')

let sentryKey = '82f0a373fb654c42ae8c550e41c35577'
let sentryApp = '99704'
let sentryURL = 'https://' + sentryKey + '@sentry.io/' + sentryApp

let _APP_INFO = {
  name: 'Github Battle',
  branch: 'video4',
  version: '1.0'
}

Raven.config(sentryURL, {
  release: _APP_INFO.version,
  tags: {
    branch: _APP_INFO.branch,
  }
}).install()

ReactDOM.render(routes,document.getElementById('app'))
