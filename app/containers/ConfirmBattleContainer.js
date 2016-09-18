let React = require('react')
let ConfirmBattle = require('../components/ConfirmBattle')

let ConfirmBattleContainer = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },

  getInitialState: function() {
    return {
      isLoading: true,
      playerInfo: []
    }
  },

  componentDidMount: function() {
    let query = this.props.location.query
    // Fetch info from github then update state
  },

  render: function() {
    return (
      <ConfirmBattle isLoading={this.state.isLoading}
      playersInfo={this.state.playersInfo} />
    )
  }
})

module.exports = ConfirmBattleContainer
