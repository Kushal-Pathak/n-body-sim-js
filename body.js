class Body {
  constructor(x = width / 2, y = height / 2, mass = 1, radius = 10) {
    this.mass = mass; // Mass
    this.radius = radius; // radius
    this.pos = createVector(x, y); // Position
    this.force = createVector(0, 0); // Force experienced
    this.velocity = createVector(0, 0); // Velocity
    this.type = PLANET;
  }

  draw() {
    strokeWeight(2);
    stroke(0);
    this.type === SUN ? fill(209, 64, 9) : fill(100, 25, 200);
    circle(this.pos.x, this.pos.y, this.radius * 2);
  }

  gravitate(other) {
    // Calculate distance between two bodies
    const distance = p5.Vector.dist(this.pos, other.pos);

    if (distance < EPSILON) return;

    // Calculate gravitational direction
    let direction = p5.Vector.sub(other.pos, this.pos);
    direction.normalize();

    // Calculate magnitude of gravitational force
    let magnitude = (G * this.mass * other.mass) / (distance * distance);

    // Calculate gravitational force vector
    let forceVector = direction.copy().mult(magnitude);

    // Add gravitational force to both bodies
    this.force.add(forceVector);
    other.force.add(forceVector.copy().mult(-1));
  }

  applyForce() {
    // Apply force to this body
    const acceleration = this.force.copy().mult(1 / this.mass);
    this.velocity.add(acceleration);
    this.force.set(0, 0);
  }

  update() {
    // Update position of the body
    this.pos.add(this.velocity);
  }
}
