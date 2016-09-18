let axios = require('axios')
let logCustomMessage = require('./logCustomMessage')

let id = 'YOUR_CLIENT_ID'
let sec = 'YOUR_SECRET_ID'
let param = '?client_id=' + id + '&client_secret=' + sec

function getUserInfo(username) {
  return axios.get('https://api.github.com/users/' + username + param)
}

function getRepos(username) {
  // fetch usernames repos
  return axios.get('https://api.github.com/users/' + username + '/repos' + param + '&per_page=100')
}

function getTotalStars(repos) {
  // calculate all the stores that user has
  return repos.data.reduce(function(prev, current) {
    return prev + current.stargazers_count
  }, 0)
}

function getPlayersData(player) {
  // get repos
  // getTotalStars
  // return object with that data
  return getRepos(player.login)
    .then(getTotalStars)
    .then(function (totalStars) {
      return {
        followers: player.followers,
        totalStars: totalStars
      }
    })
}

function calculateScores(players) {
  // return array after doing some algorithms to determine winner
  return [
    players[0].followers * 3 + players[0].totalStars,
    players[1].followers * 3 + players[1].totalStars
  ]
}

let helpers = {
  getPlayersInfo: function (players) {
    return axios.all(players.map(function (username) {
      return getUserInfo(username)
    })).then(function (info) {
      return info.map(function (user) {
        return user.data
      })
    }).catch(function (error) {
      return logCustomMessage(error.statusText, {
        players: players,
        error: error
      })
    })
  },

  battle: function (players) {
    let playerOneData = getPlayersData(players[0])
    let playerTwoData = getPlayersData(players[1])

    return axios.all([playerOneData, playerTwoData])
      .then(calculateScores)
      .catch(function (error) {
        return logCustomMessage(error.statusText, {
          players: players,
          error: error
        })
      })
  }
}

module.exports = helpers
