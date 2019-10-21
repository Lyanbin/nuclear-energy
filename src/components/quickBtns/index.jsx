import React, { useState } from 'react';
import { fabric } from 'fabric';
import './index.css';

export default function QuickBtns(props) {
  const {
    canvas
  } = props;

  const handleDele = () => {
    const selectedObjArr = canvas.getActiveObjects();
    selectedObjArr.map(item => canvas.remove(item));
  };

  const addText = () => {
    const text = new fabric.IText('说点什么', {
      left: 500,
      top: 200
    });
    canvas.add(text);
  };

  const [isDrawing, changeDrawingStatus] = useState(false);
  const toggleDrawMode = () => {
    changeDrawingStatus(!isDrawing);
    canvas.isDrawingMode = !isDrawing;
  };

  const [freeDrawLineWidth, changeLineWidth] = useState(20);
  const changeFreeDrawLineWidth = (e) => {
    let value = e.currentTarget.value || 1;
    value = parseInt(value, 10);
    changeLineWidth(value);
    canvas.freeDrawingBrush.width = value;
  };

  const [freeDrawLineColor, changeLineColor] = useState('#000000');
  const changeFreeDrawLineColor = (e) => {
    let value = e.currentTarget.value || '#000000';
    changeLineColor(value);
    canvas.freeDrawingBrush.color = value;
  };
  const [freeDrawLineShadow, changeLineShadow] = useState(5);
  const changeFreeDrawLineShadow = (e) => {
    let value = e.currentTarget.value || 1;
    value = parseInt(value, 10);
    changeLineShadow(value);
    canvas.freeDrawingBrush.shadow = new fabric.Shadow({ blur: value, offsetX: 10, offsetY: 10 });
  };

  const renderFreeDrawingOptions = () => {
    return <div className="free-draw-line-options">
      <div>
        <label>线宽</label>
        <input type="range" value={freeDrawLineWidth} min="0" max="100" onChange={changeFreeDrawLineWidth} />
      </div>
      <div>
        <label>线色</label>
        <input type="color" value={freeDrawLineColor} onChange={changeFreeDrawLineColor} />
      </div>
      <div>
        <label>阴影</label>
        <input type="range" value={freeDrawLineShadow} min="0" max="50" onChange={changeFreeDrawLineShadow} />
      </div>
    </div>
  }

  return <section className="quick-btns">
    <button onClick={handleDele} className="btn">删除</button>
    <button onClick={addText} className="btn">文字</button>
    <button onClick={toggleDrawMode} className={`btn ${isDrawing ? 'active' : ''}`}>{isDrawing ? '退出' : '画画'}</button>
    {
      isDrawing && renderFreeDrawingOptions()
    }
  </section>
}
