var React = require('react');
var Router = require('react-router');
var Link = Router.Link;

module.exports = React.createClass({
  render: function() {
    return (
      <article id="portoPage">
        <h3 id="PortTitle">What I've Been Up To!</h3>
        <h4 id="clickImage">Click on an Image to go to a Project</h4>
          <figure class="projPics">
            <a href="https://basquith16.github.io/TicTacToe" target="_blank">
              <img className="img-responsive" src="images/TykeTyme.png"/>
              <p className="captions">Newest App - TykeTyme (Coming Soon)</p>
            </a>
            <a href="https://basquith16.github.io/TicTacToe" target="_blank">
              <img className="img-responsive" src="images/tictac.png"/>
              <p className="captions">Week 2 - TicTacToe. Drag and Drop featuring raw javascript and jquery UI</p>
            </a>
            <a href="https://basquith16.github.io/Surf-and-Paddle/" target="_blank">
              <img className="img-responsive" src="images/surfPaddle.png"/>
              <p className="captions">Week 3 - Responsive Website Mockup using Flexbox and CSS</p>
            </a>
            <a href="https://basquith16.github.io/Minesweeper" target="_blank">
              <img className="img-responsive" src="images/minesweep.png"/>
              <p className="captions">Minesweeper. Three difficulty levels. Features Backbone.</p>
            </a>
            <a href="https://basquith16.github.io/ToDoList" target="_blank">
              <img className="img-responsive" src="images/todolist.png"/>
              <p className="captions">Basic ToDo List. Features JS and JQuery</p>
            </a>
            <a href="https://basquith16.github.io/MovieReviewWebsite" target="_blank">
              <img className="img-responsive" src="images/movieReview.png"/>
              <p className="captions">Another static, but responsive webpage mockup</p>
            </a>
          </figure>
        <h2 id="closure">This is just a little bit of what I've done. Checkout my gitHub link at the top of the page for more!</h2>
      </article>
    )
  }
})
