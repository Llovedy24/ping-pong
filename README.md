# ping-pong
This game is a 2 player game (Player1, Player2) tennis styled game. It requires two pladdles and a moving ball.

## Instructions of how to play this amazing ancient game lol.
1. To Start the Game Press the “ENTER” key.
2. Player 1: Player 1 can control the left side paddle i.e, PADDLE_1 by using the ‘W‘ key to move upwards and to go downwards ‘S‘ key should be used.
3. Player 2: Player 2 can control the left side paddle i.e, PADDLE_2 by using the ‘UP Arrow‘ key to move upwards and to go downwards ‘Down Arrow‘ key should be used.

![this is an image](https://media.geeksforgeeks.org/wp-content/uploads/20210208172255/ezgifcomgifmaker.gif)
[^1]: This is how this tutorial looked before I added my little spin on it.[^note]:

### Procedures and Logics in the game.
- Create an HTML file with the name index.html.
- Create a CSS file with the name styles.css and link it in the index.html file using the link tag.
- Create a JS file with the name index.js and link it in the index.html file using a script tag.
- Create a div for the game board, ball, and 2 divs for paddles, i.e. player-1 and player-2.
- Give some style to your game in the CSS file.
- Get a reference to paddles, balls, and game boards in JS.
- Create a function in the index.js file with the name move ball.
- Give the ball a random direction and a random speed by changing the x and y coordinates of the ball.
- Apply collision with ball and game board’s top/bottom side, i.e. if the ball touches the top/bottom of the board then multiply -1 * y velocity of the ball.
- Apply collision with ball and game left and right side of the game board. i.e. increase the score and change game state to serve the state.
- Apply collision with ball and paddles. i.e. multiply -1 * x velocity of the ball.
v2