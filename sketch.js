let bodies = [];
function setup() {
  createCanvas(windowWidth, windowHeight);
  solarSystem();
}

function draw() {
  background(220);
  for (let i = 0; i < bodies.length - 1; i++) {
    for (let j = i + 1; j < bodies.length; j++) {
      bodies[i].gravitate(bodies[j]);
    }
  }
  bodies.forEach((body) => {
    body.applyForce();
    body.update();
    body.draw();
  });
}

function threeBodyProblem() {
  bodies.push(new Body(118, 32, 1, 5));
  bodies.push(new Body(618, 32, 1, 5));
  bodies.push(new Body(368, 465.0127, 1, 5));
}

function solarSystem() {
  bodies.push(new Body(width / 2, height / 2, 10000, 50));
  bodies.push(new Body(width / 2, height / 2 - 100, 1, 5));
  bodies.push(new Body(width / 2, height / 2 - 150, 1, 6));
  bodies.push(new Body(width / 2, height / 2 - 200, 1, 7));
  bodies.push(new Body(width / 2, height / 2 - 250, 1, 8));
  bodies.push(new Body(width / 2, height / 2 - 300, 1, 9));
  bodies.push(new Body(width / 2, height / 2 - 350, 1, 10));

  bodies[0].type = SUN;
  bodies[1].velocity.set(10, 0);
  bodies[2].velocity.set(8, 0);
  bodies[3].velocity.set(6, 0);
  bodies[4].velocity.set(5, 0);
  bodies[5].velocity.set(5, 0);
  bodies[6].velocity.set(5, 0);
}
