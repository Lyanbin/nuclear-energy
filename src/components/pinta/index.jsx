import React from 'react';
import Tools from '../tools/index';
import { fabric } from 'fabric';
import { getElementSize } from '../../utils';
import './index.css';

export default class Pinta extends React.Component {
  state = {
    canvas: null
  }

  componentDidMount() {
    const size = getElementSize('pinta');
    const canvas = new fabric.Canvas('canvas', {
      width: size.width - 60,
      height: size.height
    });
    this.setState({
      canvas: canvas
    });
  }

  render() {
    const {
      canvas
    } = this.state;
    return (
      <section className="pinta" id="pinta">
        <Tools canvas={canvas} />
        <canvas id="canvas" />
      </section>
    );
  }
}

