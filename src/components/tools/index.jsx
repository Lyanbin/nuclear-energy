import React from 'react';
import HeadFilter from '../headfilter';
import QuickBtns from '../quickBtns';
import { resource } from '../../resource';
import { fabric } from 'fabric';
import './index.css';

// const headFilterItems = ['常用', '全部', '身体', '脸'];
const headFilterItems = ['常用'];

export default function Tools(props) {
  const {
    canvas
  } = props;

  const addImg = (id) => () => {
    const imgElement = document.getElementById(id);
    const fabricImg = new fabric.Image(imgElement);
    canvas.add(fabricImg);
  }

  return (
    <section className="tools">
      <HeadFilter items={headFilterItems} />
      <div className="tool-imgs">
        {
          resource && resource.length && resource.map(item => (
            <div className="tool-img-wrap" key={item.name} onClick={addImg(item.name)}>
              <img src={item.url} className="tool-img" alt={item.name} id={item.name} />
            </div>
          ))
        }
      </div>
      <QuickBtns canvas={canvas} />
    </section>
  );
}