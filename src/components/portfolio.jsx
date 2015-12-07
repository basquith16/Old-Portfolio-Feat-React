var React = require('react');
var Router = require('react-router');
var Link = Router.Link;

module.exports = React.createClass({
  render: function() {
    return (
      <article id="portoPage">
        <h3 id="PortTitle">What I've Been Up To!</h3>
        <h4 id="clickImage">Click on an Image to go to a Project</h4>
        <div className="imageRows">
          <div className="tictactoe">
            <a href="https://basquith16.github.io/TicTacToe" target="_blank">
              <img className="tictactoe" src="images/TykeTyme.png"/>
            </a>
            <p className="captions">Newest App - TykeTyme (Coming Soon)</p>
          </div>
          <div className="tictactoe">
            <a href="https://basquith16.github.io/TicTacToe" target="_blank">
              <img className="tictactoe" src="images/tictac.png"/>
            </a>
            <p className="captions">Week 2 - TicTacToe. Drag and Drop featuring raw javascript and jquery UI</p>
          </div>
        </div>
        <div className="imageRows">
          <div className="tictactoe">
            <a href="https://basquith16.github.io/Surf-and-Paddle/" target="_blank">
              <img className="tictactoe" src="images/surfPaddle.png"/>
            </a>
            <p className="captions">Week 3 - Responsive Website Mockup using Flexbox and CSS</p>
          </div>
          <div className="minesweeper">
            <a href="https://basquith16.github.io/Minesweeper" target="_blank">
              <img className="minesweeper" src="images/minesweep.png"/>
            </a>
            <p className="captions">Minesweeper. Three difficulty levels. Features Backbone.</p>
          </div>
        </div>
        <div className="imageRows">
          <div className="tictactoe">
            <a href="https://basquith16.github.io/ToDoList" target="_blank">
              <img className="tictactoe" src="images/todolist.png"/>
            </a>
            <p className="captions">Basic ToDo List. Features JS and JQuery</p>
          </div>
          <div classNameName="tictactoe">
            <a href="https://basquith16.github.io/MovieReviewWebsite" target="_blank">
              <img className="tictactoe" id="movieReview" src="images/movieReview.png"/>
            </a>
            <p className="captions" id="movieReview">Another static, but responsive webpage mockup</p>
          </div>
        </div>
        <h2 id="closure">This is just a little bit of what I've done. Checkout my gitHub link at the top of the page for more!</h2>
      </article>
    )
  }
})
