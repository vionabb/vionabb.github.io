resize();
background(128);
rectMode(CENTER);
ellipseMode(CENTER);
colorMode(HSB);
textAlign(CENTER, CENTER);
textSize(40);

float ang = random(TWO_PI);
float x0 = width/2;
float y0 = height/2;

void draw(){
	background(255,0,255);

	stroke(color(121,255,200));
	strokeWeight(min(width, height) * .055);
	line(x0,y0, x0, height);
	strokeWeight(4);

	draw_figure();
	ang += radians(.5);

	fill(0, 200);
	text("Happy Birthday Mom!", x0, textAscent() + textDescent() + 10);
}

float phi=1.6180339887498948482045868343656381177203091798057628;
float golden_angle=TWO_PI/phi;
float da=TWO_PI/10;
int t;
 
void draw_figure() {
  float ang2=ang;
  float x1, x2;
  float y1, y2;
  float r= min(height*2/3, width*2/3);
  float mHue = 0;
  // console.log(r);

  noStroke();
  //fill(255);
  while(r > 30) {
    x1=x0+r*cos(ang2+da);
    y1=y0+r*sin(ang2+da);
    x2=x0+r*cos(ang2-da);
    y2=y0+r*sin(ang2-da);
    fill(mHue, r/2, r/2, 90);
    bezier(x0,y0,x1, y1, x2, y2, x0, y0);
    r/=1.01;
    ang2+=golden_angle;
    mHue+=1;
    mHue = mHue % 255;
	}
}

void mouseMoved() {
  //da=abs(mouseX-width/2)/8*TWO_PI/360;
  // da=mouseX/10*TWO_PI/360;
  // if (mousePressed){
	  t=int(mouseY*255/(height-1));
	  redraw();
  // }
  console.log(mousePressed);
}


void resize(){
	var w = window,
    d = document,
    e = d.documentElement,
    g = d.getElementsByTagName('body')[0],
    x = w.innerWidth || e.clientWidth || g.clientWidth,
    y = w.innerHeight|| e.clientHeight|| g.clientHeight;

    size(x,y);

    // if (!processingInstance){
    //     processingInstance = Processing.getInstanceById('processing-background-target');
    // }
    // if (processingInstance)
    //         processingInstance.restart(x, y);
}
window.onresize = resize();