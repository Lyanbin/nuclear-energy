import React, { useEffect } from 'react';
import { fabric } from 'fabric';
import './index.css';

export default function QuickBtns(props) {
  const {
    canvas
  } = props;

  const handleDele = () => {
    const selectedObjArr = canvas.getActiveObjects();
    selectedObjArr.map(item => canvas.remove(item));
  }

  const addText = () => {
    const text = new fabric.IText('说点什么', {
      left: 500,
      top: 200
    });
    canvas.add(text);
  }

  return <section className="quick-btns">
    <button onClick={handleDele} className="btn">删除</button>
    <button onClick={addText} className="btn">文字</button>
  </section>
}
