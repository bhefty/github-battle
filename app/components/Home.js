let React = require('react')
let ReactRouter = require('react-router')
let Link = ReactRouter.Link
let MainContainer = require('./MainContainer')

let Home = React.createClass({
  render: function() {
    return (
      <MainContainer>
        <h1>Github Battle</h1>
        <p className='lead'>Some fancy motto</p>
        <Link to='/playerOne'>
          <button type='button' className='btn btn-lg btn-success'>Get Started</button>
        </Link>
      </MainContainer>
    )
  }
})

module.exports = Home
