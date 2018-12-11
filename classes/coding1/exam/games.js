

var expandingCircle = new p5((sketch) => {

    let cx = 200, cy = 200, r = 10;
    let bc = sketch.color(60);

    sketch.setup = () => {
        sketch.createCanvas(400, 400);
        sketch.colorMode(sketch.HSB);
        sketch.fill(sketch.random(255), 200, 175);
    };

    sketch.draw = () => {
        sketch.background(bc);
        sketch.ellipse(cx, cy, r*2, r*2);

        if (sketch.mouseIsPressed) {
            if (sketch.dist(cx, cy, sketch.mouseX, sketch.mouseY) < r) {
                r += 1;
                sketch.fill(sketch.random(255), 200, 175);
            }
        }
    }


}, document.getElementById('expandingCircle'))

var randomEllipses = new p5((sketch) => {

    let xs = [];
    let ys = [];
    let rs = [];
    var j = 0;

    sketch.setup = () => {
        sketch.createCanvas(400, 400);
        sketch.frameRate(3);

        for(var i = 0; i < 10; i++) {
            xs.push(sketch.random(400))
            ys.push(sketch.random(400))
            rs.push(sketch.random(10, 80))
        }
    }
    sketch.draw = () => { 
        j += 1;
        j %= xs.length;
        xs[j] = sketch.random(400);
        ys[j] = sketch.random(400);
        rs[j] = sketch.random(10, 80);

        sketch.background(78);
        for (var i = 0; i < xs.length; i++) {
            sketch.ellipse(xs[i], ys[i], rs[i]*2, rs[i]*2);
        }
       
    }

}, document.getElementById('randomEllipses'));

var coffeeMugs = new p5((sketch) => {

    let black = sketch.color(30, 30, 30);
    let green = sketch.color(0, 186, 0);

    sketch.drawCoffeeMug = (x, y, size) => {

        sketch.noStroke();
        sketch.fill(black);

        sketch.beginShape();
        sketch.vertex(x - size * 0.5, y - size * 0.5);
        sketch.vertex(x + size * 0.5, y - size * 0.5);
        sketch.vertex(x + size * 0.4, y + size * 0.5);
        sketch.vertex(x - size * 0.4, y + size * 0.5);
        sketch.endShape(sketch.CLOSE);

        sketch.stroke(black);
        sketch.strokeWeight(3);
        sketch.line(x, y - size * 0.2, x + size * 0.65, y - size * 0.2);
        sketch.line(x, y + size * 0.2, x + size * 0.65, y + size * 0.2);
        sketch.line(x + size * 0.65, y + size * 0.2, x + size * 0.65, y - size * 0.2);

        sketch.stroke(green);
        sketch.noFill();
        sketch.beginShape();
        sketch.vertex(x - size * 0.2, y - size * 0.2);
        sketch.vertex(x - size * 0.1, y + size * 0.2);
        sketch.vertex(x, y);
        sketch.vertex(x + size * 0.1, y + size * 0.2);
        sketch.vertex(x + size * 0.2, y - size * 0.2);
        sketch.endShape();
    }

    sketch.setup = () => {
        sketch.createCanvas(400, 400);
        sketch.background(130, 200, 130);
        sketch.frameRate(8);
    };

    sketch.draw = () => {
        if (sketch.mouseIsPressed) {
            sketch.drawCoffeeMug(sketch.mouseX, sketch.mouseY, sketch.random(40, 100));
        }
    }

}, document.getElementById('coffeeMug'));