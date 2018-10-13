import React, { Component } from 'react';
import Planet from '../../../src/components/planet/Planet';
import { styler, tween, merge, action } from 'popmotion';
import { interpolate } from 'flubber';

class PlanetAnimation extends Component {
  constructor(props) {
    super(props);

    this.planetRef = React.createRef();
    this.myRef = React.createRef();
  }

  componentDidMount() {
    console.log('compdidm planet', this.planetRef.current);
    console.log('compdidm myRef?', this.myRef.current);

    const mouth = styler(
      this.planetRef.current.getElementById('kawaii-face__path-1')
    );
    const tongue = styler(document.getElementById('kawaii-face__tongue'));
    const eyeLeft = styler(
      document.querySelector('#kawaii-face__eyes__arc path:first-child')
    );
    const eyeRight = styler(
      document.querySelector('#kawaii-face__eyes__arc path:last-child')
    );

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

  onMouseOver = () => {
    console.log('over');

    console.log('null pk?', this.planetRef.current);
    console.log('myRef pk?', this.myRef.current);
  };

  render() {
    console.log('render planet', this.planetRef.current);
    console.log('render myRef?', this.myRef.current);

    return (
      <div ref={this.myRef}>
        <Planet ref={this.planetRef} color="red" />
      </div>
    );
  }
}
export default PlanetAnimation;
