/*
 * Emoji Spinner inspired by CS:GO Case Opening
 *
 * I know, the code's a mess. I hope in a few years I'll look back at this and laugh.
 * But for now, I'm actually proud of this monster.
 *
 * With a bit of front-end sprinkles it ain't that bad!
 *
 * If you're re-using this code. Please refer this as your source.
 * Give credit where it's due. With a comment in the code for example.
 */

export class SpinnerAnimation {
  constructor({ container, list }) {
    this.tickSound = new Audio(
      "https://freesound.org/data/previews/269/269026_5094889-lq.mp3"
    );
    this.tickSound.playbackRate = 4;

    this.winSound = new Audio(
      "https://freesound.org/data/previews/511/511484_6890478-lq.mp3"
    );

    this.firstRound = true;

    this.reset();

    this.spinnerContainer = document.getElementById(container);
    this.spinnerList = this.spinnerContainer.children.namedItem(list);
    this.spinnerMarker = this.spinnerContainer.children.namedItem("spinnerMarker");
    this.spinnerItems = this.spinnerList.children;
    this.spinnerWon = document.getElementById("spinnerWon");
  }

  reset() {
    this.started = false;
    this.stopped = false;
    this.stopAnimation = false;
    this.lowerSpeed = 0;
    this.ticks = 0;
    this.offSet = 0;
    this.recycle = false;
    this.tick = false;
    this.state = null;
    this.speed = 0;
    this.winningItem = 0;
    this.firstRound = false;
  }

  start(speed = 1200) {
    this.started = true;
    this.speed = speed;
    console.log(this.speed);
    this.loop();
  }

  loop() {
    let dt = 0; // Delta Time is the amount of time between two frames
    let last = 0; // Last time of frame

    // The Animation Loop
    function loop(ms) {
      if (this.recycle) {
        this.recycle = false;
        const item = this.spinnerList.firstElementChild;
        this.spinnerList.append(item);
      }

      if (this.tick) {
        this.tick = false;
        this.tickSound.play();
      }

      this.offSet += this.speed * dt;

      const ct = ms / 1000; // MS == The amount of Milliseconds the animation is already going for. Divided by 1000 is the amount of seconds
      dt = ct - last;
      last = ct;

      // Move the item to the left
      this.spinnerList.style.right = this.offSet + "px";

      if (this.offSet >= 122) {
        this.recycle = true;
        this.offSet = 0;
        this.tick = true;
        this.ticks += 1;
        if (this.ticks >= 20 && Math.random() * 10 >= 5) {
          this.stop();
        }
      }

      if (this.stopped) {
        let stopped = false;
        if (!stopped) this.speed -= this.lowerSpeed;

        if (this.speed <= 0) {
          stopped = true;
          this.speed = 0;
        }

        if (stopped) {
          if (this.offSet >= 58.6) {
            this.offSet += 6;
          } else {
            this.offSet -= 6;
          }

          if (this.offSet >= 122 || this.offSet <= 0) {
            this.stopAnimation = true;

            this.winSound.play();

            if (this.offSet >= 122) {
              this.winningItem = 5;
              this.spinnerItems.item(5).classList.add("win");
              this.spinnerWon.innerText += this.spinnerItems.item(5).innerText;
              this.offSet = 122;
            }

            if (this.offSet <= 0) {
              this.winningItem = 4;
              this.spinnerItems.item(4).classList.add("win");
              this.spinnerWon.innerText += this.spinnerItems.item(4).innerText;
              this.offSet = 0;
            }
          }
        }
      }

      if (!this.stopAnimation) {
        requestAnimationFrame(loop);
      }
    }

    // Bind Class to loop function
    loop = loop.bind(this);
    requestAnimationFrame(loop);
  }

  stop() {
    this.stopped = true;

    // Calculate a random lower speed
    this.lowerSpeed = Math.ceil(Math.random() * 10) + 1;
  }
}
