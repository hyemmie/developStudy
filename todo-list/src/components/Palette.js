import React from 'react';
import './Palette.css';
const Color = ({ color, active, onClick }) => {
  return (
    <div
      className={`color ${active && 'active'}`}
      style={{ background: color }}
      onClick={() => {
        onClick(color);
      }}
    ></div>
  );
};

const Palette = ({ colors, selected, onSelect }) => {
  const paletteList = colors.map(({ color }) => (
    <Color color={color} active={color === selected} onClick={onSelect}></Color>
  ));
  return <div className="palette">{paletteList}</div>;
};

export default Palette;
