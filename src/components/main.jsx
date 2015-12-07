var React = require('react');
var Router = require('react-router');
var Link = Router.Link;

module.exports = React.createClass({
  render: function() {
    return (
      <div>
      <header>
        <h1>Brian Asquith</h1>
        <h2 className="subheading">Front End Software Engineer</h2>
        <h2 className="subheading">Web Development</h2>
        <h2 className="subheading">UI/UX</h2>
        <img id="myPic" src="images/portpicback.jpg" alt="guy" />
      </header>
      <div className="navbar">
        <div className="brand">
          <Link to='/'>Home</Link>
          <Link to='1'>About Me</Link>
          <Link to='2'>Portfolio</Link>
        </div>

        <nav className="rightNav">
          <div>
            <a href="https://github.com/basquith16" target="_blank">
              <img id="gitHub" src="images/stormtroopocat.png" alt="symbol" />
            </a>
          </div>
          <div>
            <a href="https://twitter.com/basquith16" target="_blank">
              <img src="http://marklaxton.com/wp-content/uploads/2015/07/twitter-icon.png" id="twitter" />
            </a>
          </div>
          <div>
            <a href="https://www.linkedin.com/profile/view?id=AAIAAAtPb3cBRZooOVV8DgDVQhbnXnwhZ4xFVeY&trk=nav_responsive_tab_profile" target="_blank">
              <img id="linkedinLogo" src="images/linkedin.png" alt="linkedIn"/>
            </a>
          </div>
          <div>
            <a href="mailto:basquithcpt@gmail.com?Subject=Saw Your Portfolio%20" target="_top">
              <img id="email" src="images/email-icon.png"  alt="email"/>
            </a>
          </div>
          <div>
            <a href="tel:4074904075">
              <img id="telephone" src="images/icon_telephone.png" alt="telephone"/>
            </a>
          </div>
        </nav>
      </div>
      {this.props.children}
    </div>
    )
  }
})
