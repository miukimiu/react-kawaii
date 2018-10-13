import React, { Component } from 'react';
import Planet from '../../../src/components/planet/Planet';
import { styler, tween, merge, action, easing, keyframes } from 'popmotion';

class PlanetAnimation extends Component {
  constructor(props) {
    super(props);

    this.planetRef = React.createRef();
  }

  componentDidMount() {
    const mouth = styler(
      this.planetRef.current.querySelector('#Combined-Shape')
    );
    const tongue = styler(
      this.planetRef.current.querySelector('#kawaii-face__tongue')
    );
    const eyeLeft = styler(
      this.planetRef.current.querySelector(
        '#kawaii-face__eyes__arc path:first-child'
      )
    );
    const eyeRight = styler(
      this.planetRef.current.querySelector(
        '#kawaii-face__eyes__arc path:last-child'
      )
    );
    const body = styler(this.planetRef.current.querySelector('svg'));

    const showEye = tween({
      from: { scaleY: 0, opacity: 1 },
      to: { scaleY: 1 },
      duration: 200
    });

    const show = tween({
      from: { scaleY: 0, opacity: 1 },
      to: { scaleY: 1 },
      duration: 200
    });

    const blinkEye = tween({
      from: { scaleY: 1 },
      to: { scaleY: 0.3 },
      duration: 50,
      flip: 1
    });

    const closeMouth = tween({
      from: { scaleY: 1 },
      to: { scaleY: 0.3 },
      duration: 300,
      flip: 1
    });

    const tongueDisappear = tween({
      from: { scaleY: 1 },
      to: { scaleY: 0 },
      duration: 300,
      flip: 1
    });

    keyframes({
      values: [
        { originX: 0, originY: 0, rotate: 0 },
        { rotate: 8 },
        { rotate: 0 },
        { rotate: -10 },
        { rotate: 0 }
      ],
      duration: 3000,
      ease: easing.linear,
      loop: Infinity
    }).start(body.set);

    const eyeLeftAction = action(({ complete }) => {
      showEye.start({
        update: eyeLeft.set,
        complete: () => {
          complete();
          setInterval(() => blinkEye.start({ update: eyeLeft.set }), 2000);
        }
      });
    });

    const eyeRightAction = action(({ complete }) => {
      showEye.start({
        update: eyeRight.set,
        complete: () => {
          complete();
          setInterval(() => blinkEye.start({ update: eyeRight.set }), 2000);
        }
      });
    });

    const mouthAction = action(({ complete }) => {
      show.start({
        update: mouth.set,
        complete: () => {
          complete();
          setInterval(() => closeMouth.start({ update: mouth.set }), 3500);
        }
      });
    });

    const tongueAction = action(({ complete }) => {
      show.start({
        update: tongue.set,
        complete: () => {
          complete();
          setInterval(
            () => tongueDisappear.start({ update: tongue.set }),
            3500
          );
        }
      });
    });

    merge(eyeLeftAction, eyeRightAction, mouthAction, tongueAction).start();
  }

  render() {
    return (
      <div ref={this.planetRef}>
        <Planet />
      </div>
    );
  }
}
export default PlanetAnimation;
