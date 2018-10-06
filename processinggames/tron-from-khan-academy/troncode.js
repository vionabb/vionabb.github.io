
 var seconds = millis();
var Cycle = function(x, y, dx, color) {
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = 0;
    this.color = color;
    this.weight = 10;
};

Cycle.prototype.draw = function() {
    stroke(this.color);
    strokeWeight(this.weight);
    point(this.x, this.y);
};

Cycle.prototype.move = function() {
    this.x += this.dx;
    this.y += this.dy;
};

// colors for the cycles
var cycleColors = [];
var redCycleColor = color(255, 0, 0);
var blueCycleColor = color(30, 0, 255);
var wallCycleColor = color(217, 100, 133);
cycleColors.push(redCycleColor);
cycleColors.push(blueCycleColor);
cycleColors.push(wallCycleColor);

// the cycles
var cycles = [];
var redCycle;
var blueCycle;

var createAndAddCycles = function() {
    redCycle = new Cycle(100, 200, 2, redCycleColor);
    blueCycle = new Cycle(300, 200, -2, blueCycleColor);
    cycles[1] = redCycle;
    cycles[0] = blueCycle;
};

createAndAddCycles();

var drawBgAndWalls = function() {
    // background
    background(227, 218, 227);
  
    // walls
    strokeWeight(15);
    stroke(wallCycleColor);
    line(0, 0, 400, 0);
    line(0, 0, 0, 400);
    line(0, 400, 400, 400);
    line(400, 0, 400, 400);
};

drawBgAndWalls();

// tests whether the cycle is colliding with something
Cycle.prototype.testCollision = function() {
    for(var i = 0; i < cycleColors.length; i++) {
        var overColor = get(this.x + this.dx * 2,
                            this.y + this.dy * 2);
        if(cycleColors[i] === overColor) {
            return true;
        }
    }
  
    return false;
};

var startMenu = true;
var gameOver = false;

var draw = function() {
  if(startMenu) {
        for(var i = 0; i < cycles.length; i++) {
            cycles[i].draw();
        }
    
        fill(1, 10, 0, 10);
        textSize(70);
        text("Tron", 78, 87);
        textSize(18);
        text("A two player game", 123, 159);
        text("Instructions: Left controls: WASD, Right Controls: \nArrows |  Rules: Don't touch each other",10,209);

        fill(255, 255, 255, 1);
        text("Click to play", 96, 324);
  }
  else if(!gameOver) {
    // draw the cycles
    for(var i = 0; i < cycles.length; i++) {
        cycles[i].draw();
    }
  
    // move the cycles
    for(var i = 0; i < cycles.length; i++) {
        cycles[i].move();
    }
  
    // check cycle collision
    for(var i = 0; i < cycles.length; i++) {
        var lost = cycles[i].testCollision();
        if(lost) {
            gameOver = true;
        }
    }
  } else { // if game over
    fill(3, 3, 3, 10);
    textSize(22);
    text("Game Over ", 41, 112);
  
    fill(3, 3, 3, 2);
    text("Tap space to play again", 75, 342);
  }
};

var keyPressed = function() {
    // move red left
    if(key.toString() === 'a' && redCycle.dx === 0) {
        redCycle.dx = -abs(redCycle.dy);
        redCycle.dy = 0;
    }
    // move red right
    if(key.toString() === 'd' && redCycle.dx === 0) {
        redCycle.dx = abs(redCycle.dy);
        redCycle.dy = 0;
    }
    // move red up
    if(key.toString() === 'w' && redCycle.dy === 0) {
        redCycle.dy = -abs(redCycle.dx);
        redCycle.dx = 0;
    }
    // move red down
    if(key.toString() === 's' && redCycle.dy === 0) {
        redCycle.dy = abs(redCycle.dx);
        redCycle.dx = 0;
    }
    
    if(key.toString() === ' ' && (gameOver || startMenu)){
        // redeclare cycles
        createAndAddCycles();
      
        drawBgAndWalls();
      
        gameOver = false;
        startMenu = false;
    }
  
    // move blues left
    if(keyCode === LEFT && blueCycle.dx === 0) {
        blueCycle.dx = -abs(blueCycle.dy);
        blueCycle.dy = 0;
    }
    // move blue right
    if(keyCode === RIGHT && blueCycle.dx === 0) {
        blueCycle.dx = abs(blueCycle.dy);
        blueCycle.dy = 0;
    }
    // move blue up
    if(keyCode === UP && blueCycle.dy === 0) {
        blueCycle.dy = -abs(blueCycle.dx);
        blueCycle.dx = 0;
    }
    // move blue down
    if(keyCode === DOWN && blueCycle.dy === 0) {
        blueCycle.dy = abs(blueCycle.dx);
        blueCycle.dx = 0;
    }
};

var mousePressed = function() {
    if(gameOver || startMenu) {
        // redeclare cycles
        createAndAddCycles();
      
        drawBgAndWalls();
      
        gameOver = false;
        startMenu = false;
    }
};

size(400, 400);
