let React = require('react')
let ReactCSSTransitionGroup = require('react-addons-css-transition-group')
require('../main.css')

let Main = React.createClass({
  render: function() {
    return (
      <div className='main-container'>
        <ReactCSSTransitionGroup
          transitionName='appear'
          transitionEnterTimeout={500}
          transitionLeaveTimeout={500}>
            {React.cloneElement(this.props.children, {key: this.props.location.pathname})}
        </ReactCSSTransitionGroup>
      </div>
    )
  }
})

module.exports = Main
