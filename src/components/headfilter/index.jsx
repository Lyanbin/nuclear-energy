import React, { useState } from 'react';
import './index.css';

export default function HeadFilter(props) {
  const {
    items = [],
    onChange,
    defaultSelected = 0
  } = props;

  const handleClick = (index) => () => {
    setSelected(index);
    if (onChange) {
      onChange(index);
    }
  }
  let [selected, setSelected] = useState(defaultSelected);
  return <div className="head-filter">
    {
      items.map((item, index) => (
        <div
          className={`head-filter-item ${ selected === index ? 'selected' : ''}`}
          key={index}
          onClick={handleClick(index)}
        >
          {item}
        </div>
      ))
    }
  </div>
}