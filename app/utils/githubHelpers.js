let axios = require('axios')

let id = 'YOUR_CLIENT_ID'
let sec = 'YOUR_SECRET_ID'
let param = '?client_id=' + id + '&client_secret=' + sec

function getUserInfo(username) {
  return axios.get('https://api.github.com/users/' + username + param)
}

let helpers = {
  getPlayersInfo: function (players) {
    return axios.all(players.map(function (username) {
      return getUserInfo(username)
    })).then(function (info) {
      return info.map(function (user) {
        return user.data
      })
    }).catch(function (err) {
      console.warn('Error in getPlayersInfo', err)
    })
  }
}

module.exports = helpers
