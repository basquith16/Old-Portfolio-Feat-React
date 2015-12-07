var React = require('react');
var Router = require('react-router');
var Link = Router.Link;

module.exports = React.createClass({
  render: function() {
    return (
      <div className="aboutMeBody">
          <div>
            <img src="images/myPic.png" alt="pic" height="300" width="300" id="bwPic"/>
            <ul className="attributes">
              <li>Height: 5'8</li>
              <li>Weight: Debatable</li>
              <li>Eyes: Blue</li>
              <li>Features: Devestatingly Handsome</li>
              <li>Hero: The Rock</li>
              <li>Greatest Fear: Hollywood Remakes</li>
            </ul>
          </div>
          <div id="skills">
            <h2>Skill Set</h2>
            <ul>
              <li>Javascript/ES6</li>
              <li>Python</li>
              <li>HTML5/CSS</li>
              <li>AngularJS</li>
              <li>React</li>
              <li>BackboneJS</li>
              <li>SASS</li>
              <li>Flexbox/Bootstrap</li>
              <li>UI/UX</li>
              <li>Single Page Applications</li>
            </ul>
          </div>
          <h4 className="aboutMe">ABOUT ME</h4>
          <p id="firstParag">
            Fabulous secret powers were revealed to me the day I grabbed a laptop and said, "By the power of the universe, I am leaving my teaching career to becoming a programmer!" Maybe it didn't go down exactly like that, but that's neither here nor there.</p>

          <p id="aboutParag">
            A native of Upstate, NY, I graduated from the University at Albany with a Bachelor's Degree in Psychology. After dabbling in various areas of employment, including both a surgical assistant and high school teacher, the missing puzzle piece in my life revealed itself in the form of software development.
          </p>

          <p id="aboutParag">
            After being self-taught in Python, html5, and css, it was obvious that a career in programming was meant for me. At that point things needed to be taken to the next level. Enter the Iron Yard.
          </p>
          <p id="aboutParag">
            After three months of intense, grueling, yet amazing challenges, graduation day came and went. Entering the world of programming with a certificate in front end software development, I have been doing some freelance work, building websites and single-page web applications. I would be interested in joining a business or company if we are a good fit. I want to be surrounded by enthusiastic people who are hungry to learn and thrive on innovation.
          </p>
          <p id="aboutParag">
            If you have any questions or just want to talk code, send me a tweet or email!
          </p>
          <p id="aboutParag">
            -Brian
          </p>
        </div>
    )
  }
})
