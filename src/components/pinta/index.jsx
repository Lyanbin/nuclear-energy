import React from 'react';
import Tools from '../tools/index';
import { fabric } from 'fabric';
import { getElementSize } from '../../utils';
import './index.css';

export default class Pinta extends React.Component {
  canvas = null;

  componentDidMount() {
    const size = getElementSize('pinta');
    console.log(size);
    this.canvas = new fabric.Canvas('canvas', {
      ...size
    });
    var rect = new fabric.Rect({
      top : 100,
      left : 100,
      width : 60,
      height : 70,
      fill : 'red'
  });

  this.canvas.add(rect);
  }

  render() {
    return (
      <section className="pinta" id="pinta">
        <Tools />
        <canvas id="canvas" />
      </section>
    );
  }
}

