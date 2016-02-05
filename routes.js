// routes.js
import React, { Component } from 'react'
import { Route, IndexRoute, Link } from 'react-router'

// Main Component
class App extends Component {
	componentDidMount(){
		document.body.className=''
	}
	render(){
		return(
			<div>
				<h1>Arif Furqon</h1>
					<nav>
						<ul>
							<li><Link to="/">Home</Link></li>
							<li><Link to="/portfolio">Portfolio</Link></li>
							<li><Link to="/about">About</Link></li>
							<li><Link to="/contact">Contact</Link></li>
						</ul>
					</nav>
				{ this.props.children }
			</div>
		)
	}
}

// Pages
class Home extends Component {
	render(){
		return(
			<div>
				<h2>Home</h2>
					<div>This is the home page</div>
			</div>
		)
	}
}

class Portfolio extends Component {
	render(){
		return(
			<div>
				<h2>Portfolio</h2>
					<div>This is the portfolio page</div>
			</div>
		)
	}
}

class About extends Component {
  render(){
    return (
      <div>
        <h2>About</h2>
        <div>This is the About page</div>
      </div>
    )
  }
}

class Contact extends Component {
  render(){
    return (
      <div>
        <h2>Contact</h2>
        <div>This is Contact page</div>
      </div>
    )
  }
}

class NoMatch extends Component {
  render(){
    return (
      <div>
        <h2>NoMatch</h2>
        <div>404 error</div>
      </div>
    )
  }
}

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Home}/>
    <Route path="Portfolio" component={Portfolio}/>
    <Route path="About" component={About}/>
    <Route path="contact" component={Contact}/>
    <Route path="*" component={NoMatch}/>
  </Route>
)
