let React = require('react')
let Results = require('../components/Results')
let githubHelpers = require('../utils/githubHelpers')

let  ResultsContainer = React.createClass({
  getInitialState: function() {
    return {
      isLoading: true,
      scores: []
    }
  },

  componentDidMount: function() {
    githubHelpers.battle(this.props.location.state.playersInfo)
      .then(function (scores) {
        this.setState({
          scores: scores,
          isLoading: false
        })
      }.bind(this))
  },

  render: function() {
    return (
      <Results
        isLoading={this.state.isLoading}
        playersInfo={this.props.location.state.playersInfo}
        scores={this.state.scores} />
    )
  }

})

module.exports = ResultsContainer
