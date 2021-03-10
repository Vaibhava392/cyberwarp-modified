var player1, player2, image1, image2, backgroundImage
var ground, laserGroup, laserGroup2, player, playerCount, players;
var database, game, form; 
var allPlayers;
var score1 = 0
var score2 = 0
var gameState = 0
var PLAY = 1
var END = 2

function preload(){
  backgroundImage = loadImage("images/warp background.gif")
  image1 = loadImage("images/image 2.gif")
  image2 = loadImage("images/image 1.gif")
}
function setup() {
  createCanvas(400,400);
  ground = createSprite(400,350,800,20)
  ground.shapeColor = "red";
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
  laserGroup = createGroup();
  laserGroup2 = createGroup();
}

function draw() {
  background(backgroundImage);
  if(game.playerCount === 2){
    game.update(1);
  }
  if (gameState === PLAY){
    clear();
    game.play();
} 
if(gameState === END){
  game.end();
}
}